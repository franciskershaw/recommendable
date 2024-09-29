import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";
import { useModals } from "@/context/ModalsContext";
import useRecommends from "@/hooks/recommends/useRecommends";
import { Recommend, ValidCategory } from "@/types/globalTypes";

import AddRecommendModal from "./components/AddRecommendModal/AddRecommendModal";
import RecommendCard from "./components/RecommendCard/RecommendCard";

const CategoryPageLayout = ({
  name,
  category,
}: {
  name: string;
  category: ValidCategory;
}) => {
  const { openModal, closeModal, isRecommendModalOpen } = useModals();

  const { recommends } = useRecommends();

  return (
    <>
      <div className="space-y-4">
        {/* Header Section */}
        <div className="flex items-center gap-3">
          <Heading>{name}</Heading>
          {recommends[category].length !== 0 && (
            <Button variant="outline" onClick={() => openModal()}>
              <FaPlus />
            </Button>
          )}
        </div>

        {/* Content Section */}
        {recommends[category].length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recommends[category].map((recommend: Recommend) => (
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
              onClick={() => openModal()}
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
        open={isRecommendModalOpen}
        onOpenChange={(open) => (open ? openModal() : closeModal())}
        category={category}
        closeModal={closeModal}
      />
    </>
  );
};

export default CategoryPageLayout;
