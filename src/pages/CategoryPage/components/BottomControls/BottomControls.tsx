import { FaPlus } from "react-icons/fa";

const BottomBar = ({ openAddRecommend }: { openAddRecommend: () => void }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 px-4 py-3 shadow-md flex items-center justify-end">
      <button
        onClick={() => openAddRecommend()}
        className="rounded-full bg-slate-700 p-3 text-white flex items-center justify-center"
      >
        <FaPlus size={20} />
      </button>
    </div>
  );
};

export default BottomBar;
