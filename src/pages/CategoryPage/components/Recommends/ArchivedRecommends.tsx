import { Recommend } from "@/types/globalTypes";

import ArchivedCard from "../RecommendCard/ArchivedCard";

const ArchivedRecommends = ({
  recommends = [],
}: {
  recommends: Recommend[];
}) => {
  return recommends.length > 0 ? (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recommends.map((recommend: Recommend) => (
        <ArchivedCard key={recommend._id} recommend={recommend} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center py-16">
      <p className="text-lg text-muted-foreground mb-4">
        Archived recommendations will show here
      </p>
    </div>
  );
};

export default ArchivedRecommends;
