import { FaPlus } from "react-icons/fa";

import { useModals } from "@/context/ModalsContext";
import { ValidCategory } from "@/types/globalTypes";

import SortBy from "../SortBy/SortBy";
import BottomControlButton from "./BottomControlButton";

const BottomControls = ({ category }: { category: ValidCategory }) => {
  const { openAddRecommend } = useModals();
  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 bg-primary border-t border-primary px-6 py-3 shadow-md flex items-center justify-between">
      <SortBy category={category} />
      <BottomControlButton onClick={() => openAddRecommend()}>
        <FaPlus size={20} />
      </BottomControlButton>
    </div>
  );
};

export default BottomControls;
