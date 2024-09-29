import { useState } from "react";

import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";
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
  const [openAddRecommendModal, setOpenAddRecommendModal] = useState(false);
  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Heading>{name}</Heading>
          <Button
            variant="outline"
            onClick={() => setOpenAddRecommendModal(true)}
          >
            <FaPlus />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recommends?.map((recommend) => (
            <RecommendCard key={recommend._id} recommend={recommend} />
          ))}
        </div>
      </div>
      <AddRecommendModal
        open={openAddRecommendModal}
        onOpenChange={(open) => setOpenAddRecommendModal(open)}
        category={category}
        closeModal={() => setOpenAddRecommendModal(false)}
      />
    </>
  );
};

export default CategoryPageLayout;
