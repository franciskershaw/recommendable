import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";
import Heading from "@/components/ui/Heading/Heading";
import { recommend } from "@/lib/globalTypes";

const CategoryPageLayout = ({
  name,
  recommends,
}: {
  name: string;
  recommends: recommend[];
}) => {
  return (
    <div className="space-y-2">
      <Heading>{name}</Heading>

      {recommends.map((recommend) => (
        <Card key={recommend.id}>
          <CardHeader>
            <CardTitle>{recommend.name}</CardTitle>
            <CardDescription>
              Recommended by {recommend.recommendedBy}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CategoryPageLayout;
