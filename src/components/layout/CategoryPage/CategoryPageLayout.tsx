import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";
import { useModals } from "@/context/ModalsContext";
import { Recommend, ValidCategory } from "@/types/globalTypes";

import AddRecommendModal from "./AddRecommendModal";
import RecommendCard from "./RecommendCard";

const CategoryPageLayout = ({
  name,
  recommends,
  category,
}: {
  name: string;
  recommends: Recommend[];
  category: ValidCategory;
}) => {
  const { isAddRecommendModalOpen, openAddModal, closeAddModal } = useModals();

  return (
    <>
      <div className="space-y-4">
        {/* Header Section */}
        <div className="flex items-center gap-3">
          <Heading>{name}</Heading>
          {recommends.length !== 0 && (
            <Button variant="outline" onClick={openAddModal}>
              <FaPlus />
            </Button>
          )}
        </div>

        {/* Content Section */}
        {recommends.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recommends.map((recommend) => (
              <RecommendCard key={recommend._id} recommend={recommend} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              No recommendations yet. Start by adding a new one!
            </p>
            <Button
              variant="default"
              onClick={openAddModal}
              className="flex items-center gap-2"
            >
              <FaPlus />
              Add a Recommendation
            </Button>
          </div>
        )}
      </div>

      {/* Add/Edit Recommend Modal */}
      <AddRecommendModal
        open={isAddRecommendModalOpen}
        onOpenChange={(open) => (open ? openAddModal() : closeAddModal())}
        category={category}
        closeModal={closeAddModal}
      />
    </>
  );
};

export default CategoryPageLayout;
