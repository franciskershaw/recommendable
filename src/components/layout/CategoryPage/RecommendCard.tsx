import { FaArchive, FaArrowsAlt, FaEdit, FaTrash } from "react-icons/fa";

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
import { Recommend } from "@/types/globalTypes";

const RecommendCard = ({ recommend }: { recommend: Recommend }) => {
  return (
    <Card className="relative">
      {/* Drag Handle */}
      <FaArrowsAlt className="absolute top-2 right-3 cursor-grab" size={24} />

      {/* Main Content */}
      <CardHeader className="pr-12 md:pr-10">
        <CardTitle>{recommend.name}</CardTitle>
        <CardDescription>
          Recommended by {recommend.recommendedBy}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-around">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="default">
              <FaArchive size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Archive</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              <FaEdit size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Edit</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="destructive">
              <FaTrash size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete</TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default RecommendCard;
