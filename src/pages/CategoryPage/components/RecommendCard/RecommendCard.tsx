import { FaEdit, FaTrash } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

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
import useArchiveRecommend from "@/hooks/recommends/useArchiveRecommend";
import { Recommend } from "@/types/globalTypes";

const RecommendCard = ({ recommend }: { recommend: Recommend }) => {
  const { openAddRecommend, openDeleteRecommend } = useModals();
  const archiveRecommend = useArchiveRecommend();

  const onArchive = async () => {
    if (recommend?._id) {
      archiveRecommend.mutate({ _id: recommend._id });
    }
  };

  return (
    <Card className="relative">
      <CardHeader className="pr-12 md:pr-10">
        <CardTitle>{recommend.name}</CardTitle>
        <CardDescription className="flex flex-col space-y-1">
          <span>Recommended by {recommend.recommendedBy}</span>
          <span>
            Added {new Date(recommend.createdAt).toLocaleDateString("en-GB")}
          </span>
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
                variant="destructive"
              >
                <FaTrash size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => openAddRecommend(recommend)}
                size="sm"
                variant="outline"
              >
                <FaEdit size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Edit</TooltipContent>
          </Tooltip>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onArchive} size="sm" >
              <FaRegCircleCheck size={20} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Archive</TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default RecommendCard;
