import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";
import { useModals } from "@/context/ModalsContext";

const CategoryHeading = ({
  showButton,
  name,
}: {
  showButton: boolean;
  name: string;
}) => {
  const { openAddRecommend } = useModals();
  return (
    <div className="flex items-center gap-3">
      <Heading>{name}</Heading>
      {showButton && (
        <Button variant="outline" onClick={() => openAddRecommend()}>
          <FaPlus />
        </Button>
      )}
    </div>
  );
};

export default CategoryHeading;
