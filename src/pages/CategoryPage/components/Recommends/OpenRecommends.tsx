import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/Button/Button";
import { useModals } from "@/context/ModalsContext";
import { Recommend } from "@/types/globalTypes";

import RecommendCard from "../RecommendCard/RecommendCard";

const OpenRecommends = ({ recommends }: { recommends: Recommend[] }) => {
  const { openAddRecommend } = useModals();

  return recommends.length > 0 ? (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recommends.map((recommend: Recommend) => (
        <RecommendCard key={recommend._id} recommend={recommend} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center py-16">
      <p className="text-lg text-muted-foreground mb-4 text-center">
        No recommendations yet. Start by adding a new one!
      </p>
      <Button
        variant="default"
        onClick={() => openAddRecommend()}
        className="flex items-center gap-2"
      >
        <FaPlus />
        Add a Recommendation
      </Button>
    </div>
  );
};

export default OpenRecommends;
