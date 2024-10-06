import { useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

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
        <div className="bg-white z-10 fixed top-0 left-0 right-0 px-4 py-3 shadow-md">
          <div className="flex items-center gap-4">
            <CategoryHeading name={name} />
            <TabsList>
              <TabsTrigger value="open">Open</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div className="mt-12 flex-1 px-2 py-3 space-y-4">
          <TabsContent value="open">
            <OpenRecommendations recommends={recommends[category]} />
          </TabsContent>

          <TabsContent value="archived">
            <ArchivedRecommends recommends={archivedRecommends[category]} />
          </TabsContent>
        </div>
      </Tabs>

      {/* Floating Add Button */}
      <button
        onClick={() => openAddRecommend()}
        className="rounded-full fixed bottom-4 right-4 bg-slate-700 p-3 text-white"
      >
        <FaPlus size={20} />
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
