import { useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs/Tabs";
import { SORT_MOST_RECENT } from "@/constants/preferences";
import { useModals } from "@/context/ModalsContext";
import useRecommends from "@/hooks/recommends/useRecommends";
import useUser from "@/hooks/user/useUser";
import { sortRecommends } from "@/lib/utils";
import { ValidCategory } from "@/types/globalTypes";

import AddRecommendModal from "./components/AddRecommendModal/AddRecommendModal";
import BottomControls from "./components/BottomControls/BottomControls";
import CategoryHeading from "./components/CategoryHeading/CategoryHeading";
import DeleteRecommendConfirmation from "./components/DeleteRecommendConfirmation/DeleteRecommendConfirmation";
import ArchivedRecommends from "./components/Recommends/ArchivedRecommends";
import OpenRecommendations from "./components/Recommends/OpenRecommends";
import SortBy from "./components/SortBy/SortBy";

const CategoryPageLayout = ({
  name,
  category,
}: {
  name: string;
  category: ValidCategory;
}) => {
  const {
    openAddRecommend,
    openDeleteRecommend,
    closeModal,
    isRecommendModalOpen,
    isDeletionModalOpen,
    selectedRecommend,
  } = useModals();

  const { recommends, archivedRecommends, fetchingRecommends } =
    useRecommends();
  const sortPreference = useUser()?.user?.sortPreferences?.[category];
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>("open");

  useEffect(() => {
    setActiveTab("open");
  }, [location]);

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
        className="w-full h-screen flex flex-col"
      >
        {/* Fixed Header Section */}
        <div className="bg-primary text-primary-foreground md:bg-background md:text-foreground z-10 fixed md:static top-0 left-0 right-0 p-4 md:border-none md:shadow-none shadow-md border">
          <div className="flex items-center gap-4">
            <CategoryHeading name={name} />
            <TabsList>
              <TabsTrigger value="open">Open</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <div className="hidden md:block">
              <SortBy category={category} />
            </div>
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div className="mb-24 mt-16 md:mt-0 md:mb-8 flex-1 px-2 pt-5 md:pt-0 space-y-4 overflow-y-auto">
          <TabsContent value="open">
            <OpenRecommendations
              recommends={sortRecommends(
                recommends[category],
                sortPreference || SORT_MOST_RECENT
              )}
              fetchingRecommends={fetchingRecommends}
            />
          </TabsContent>

          <TabsContent value="archived">
            <ArchivedRecommends recommends={archivedRecommends[category]} />
          </TabsContent>
        </div>
      </Tabs>

      {/* Bottom Controls Section on mobile */}
      <BottomControls category={category} />

      {/* Add Recommend Button for desktop */}
      <button
        onClick={() => openAddRecommend()}
        className="absolute bottom-4 right-4 p-4 hidden md:block rounded-full border border-secondary-foreground bg-secondary text-secondary-foreground shadow-md"
      >
        <FaPlus size={24} />
      </button>

      {/* Add Recommend Modal */}
      <AddRecommendModal
        open={isRecommendModalOpen}
        onOpenChange={(open) => (open ? openAddRecommend() : closeModal())}
        category={category}
        closeModal={closeModal}
      />

      {/* Delete Recommend Modal */}
      <DeleteRecommendConfirmation
        open={isDeletionModalOpen}
        onOpenChange={(open) =>
          open && selectedRecommend
            ? openDeleteRecommend(selectedRecommend)
            : closeModal()
        }
        recommend={selectedRecommend}
        closeModal={closeModal}
      />
    </>
  );
};

export default CategoryPageLayout;
