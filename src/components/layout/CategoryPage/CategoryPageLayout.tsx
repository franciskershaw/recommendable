import { useState } from "react";

import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/Button/Button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";
import Heading from "@/components/ui/Heading/Heading";
import { Recommend, ValidCategory } from "@/types/globalTypes";

import AddRecommendModal from "./AddRecommendModal";

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
          {recommends.map((recommend) => (
            <Card key={recommend._id}>
              <div className="flex-grow">
                <CardHeader>
                  <CardTitle>{recommend.name}</CardTitle>
                  <CardDescription>
                    Recommended by {recommend.recommendedBy}
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <AddRecommendModal
        open={openAddRecommendModal}
        onOpenChange={(open) => setOpenAddRecommendModal(open)}
        category={category}
      >
        Test
      </AddRecommendModal>
    </>
  );
};

export default CategoryPageLayout;
