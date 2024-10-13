import { useEffect, useRef, useState } from "react";

import { useLocation } from "react-router-dom";

import useRecommends from "@/hooks/recommends/useRecommends";
import useUser from "@/hooks/user/useUser";
import { ValidCategory } from "@/types/globalTypes";

const useCategoryPageLayout = (category: ValidCategory) => {
  const { recommends, archivedRecommends, fetchingRecommends } =
    useRecommends();
  const sortPreference = useUser()?.user?.sortPreferences?.[category];
  const location = useLocation();
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("open");
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const [fadeVisible, setFadeVisible] = useState(false);

  const checkScrollable = () => {
    const scrollableDiv = scrollableRef.current;
    if (scrollableDiv) {
      const isOverflowing =
        scrollableDiv.scrollHeight > scrollableDiv.clientHeight;
      setIsScrollable(isOverflowing);
      setFadeVisible(isOverflowing);
    }
  };

  const handleScroll = () => {
    const scrollableDiv = scrollableRef.current;
    if (scrollableDiv) {
      const isBottomReached =
        scrollableDiv.scrollHeight - scrollableDiv.scrollTop <=
        scrollableDiv.clientHeight;
      setIsAtBottom(isBottomReached);
    }
  };

  useEffect(() => {
    setActiveTab("open");
  }, [location]);

  useEffect(() => {
    const scrollableDiv = scrollableRef.current;

    const observer = new ResizeObserver(() => {
      checkScrollable();
      handleScroll();
    });

    if (scrollableDiv) {
      observer.observe(scrollableDiv);
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    checkScrollable();

    return () => {
      if (scrollableDiv) {
        observer.unobserve(scrollableDiv);
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, [recommends, archivedRecommends, activeTab, location]);

  return {
    fetchingRecommends,
    sortPreference,
    activeTab,
    setActiveTab,
    isAtBottom,
    isScrollable,
    fadeVisible,
    recommends,
    archivedRecommends,
    scrollableRef,
  };
};

export default useCategoryPageLayout;
