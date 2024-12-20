import { FaRedo, FaTrash } from "react-icons/fa";

import { Button } from "@/components/ui/Button/Button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip/Tooltip";
import { useModals } from "@/context/ModalsContext";
import useUnarchiveRecommend from "@/hooks/recommends/useUnarchive";
import { Recommend } from "@/types/globalTypes";

const ArchivedCard = ({ recommend }: { recommend: Recommend }) => {
  const { openDeleteRecommend } = useModals();

  const unarchiveRecommend = useUnarchiveRecommend();

  const onReactivate = async () => {
    if (recommend?._id) {
      unarchiveRecommend.mutate({ _id: recommend._id });
    }
  };

  return (
    <Card className="relative bg-muted text-muted-foreground opacity-70 hover:opacity-100 transition-opacity">
      {/* Main Content */}
      <CardHeader className="pr-12 md:pr-10">
        <CardTitle>{recommend.name}</CardTitle>
        <CardDescription>
          Recommended by {recommend.recommendedBy}
        </CardDescription>
      </CardHeader>

      {/* Action Buttons */}
      <CardFooter className="flex justify-between">
        <div className="space-x-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => openDeleteRecommend(recommend)}
                size="sm"
                variant="outline"
              >
                <FaTrash size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete</TooltipContent>
          </Tooltip>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onReactivate} size="sm" variant="outline">
              <FaRedo size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Reactivate</TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default ArchivedCard;
