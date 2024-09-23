import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";
import Heading from "@/components/ui/Heading/Heading";
import { Recommend } from "@/types/globalTypes";

const CategoryPageLayout = ({
  name,
  recommends,
}: {
  name: string;
  recommends: Recommend[];
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <Heading>{name}</Heading>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recommends.map((recommend) => (
          <Card key={recommend.id}>
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
  );
};

export default CategoryPageLayout;
