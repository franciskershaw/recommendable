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

  const { recommends } = useRecommends();

  return (
    <>
      <Tabs defaultValue="open" className="w-full">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <CategoryHeading
              name={name}
              showButton={recommends[category].length !== 0}
            />
            <TabsList className="ml-auto">
              <TabsTrigger value="open">Open</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="open">
            <OpenRecommendations recommends={recommends[category]} />
          </TabsContent>

          <TabsContent value="archived">
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                Archived here
              </p>
            </div>
          </TabsContent>
        </div>
      </Tabs>

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
