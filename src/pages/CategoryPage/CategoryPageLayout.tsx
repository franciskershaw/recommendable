import { useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { Button } from "@/components/ui/Button/Button";
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
        className="w-full"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <CategoryHeading name={name} />
            <TabsList className="ml-auto">
              <TabsTrigger value="open">Open</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="open">
            <OpenRecommendations recommends={recommends[category]} />
          </TabsContent>

          <TabsContent value="archived">
            <ArchivedRecommends recommends={archivedRecommends[category]} />
          </TabsContent>
        </div>
      </Tabs>

      <Button
        variant="outline"
        onClick={() => openAddRecommend()}
        className="fixed bottom-6 right-6 flex items-center gap-2"
      >
        <FaPlus />
      </Button>

      <AddRecommendModal
        open={isRecommendModalOpen}
        onOpenChange={(open) => (open ? openAddRecommend() : closeModal())}
        category={category}
        closeModal={closeModal}
      />

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
