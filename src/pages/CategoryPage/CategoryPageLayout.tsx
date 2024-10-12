import { useEffect, useState } from "react";

import { FaPlus, FaSort } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/Select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs/Tabs";
import { useModals } from "@/context/ModalsContext";
import useRecommends from "@/hooks/recommends/useRecommends";
import { ValidCategory } from "@/types/globalTypes";

import AddRecommendModal from "./components/AddRecommendModal/AddRecommendModal";
import BottomControlButton from "./components/BottomControls/BottomControlButton";
import BottomControls from "./components/BottomControls/BottomControls";
import CategoryHeading from "./components/CategoryHeading/CategoryHeading";
import DeleteRecommendConfirmation from "./components/DeleteRecommendConfirmation/DeleteRecommendConfirmation";
import ArchivedRecommends from "./components/Recommends/ArchivedRecommends";
import OpenRecommendations from "./components/Recommends/OpenRecommends";

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

  const { recommends, archivedRecommends } = useRecommends();
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
        <div className="bg-white z-10 fixed top-0 left-0 right-0 p-4 shadow-md">
          <div className="flex items-center gap-4">
            <CategoryHeading name={name} />
            <TabsList>
              <TabsTrigger value="open">Open</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div className="mb-24 mt-16 flex-1 px-2 pt-5 space-y-4 overflow-y-auto">
          <TabsContent value="open">
            <OpenRecommendations recommends={recommends[category]} />
          </TabsContent>

          <TabsContent value="archived">
            <ArchivedRecommends recommends={archivedRecommends[category]} />
          </TabsContent>
        </div>
      </Tabs>

      <BottomControls>
        <Select>
          <SelectTrigger className="w-[160px]" chevron={<FaSort />}>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>By Date</SelectLabel>
              <SelectItem value="most-recent">Most Recent</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectSeparator />
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>By Name</SelectLabel>
              <SelectItem value="name-az">Name (A-Z)</SelectItem>
              <SelectItem value="name-za">Name (Z-A)</SelectItem>
              <SelectSeparator />
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>By Recommender</SelectLabel>
              <SelectItem value="recommender-az">Recommender (A-Z)</SelectItem>
              <SelectItem value="recommender-za">Recommender (Z-A)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <BottomControlButton onClick={() => openAddRecommend()}>
          <FaPlus size={20} />
        </BottomControlButton>
      </BottomControls>

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
