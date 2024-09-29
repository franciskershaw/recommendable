import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog/Dialog";
import { useModals } from "@/context/ModalsContext";
import { ValidCategory } from "@/types/globalTypes";

import AddRecommendForm from "../AddRecommendForm/AddRecommendForm";

const AddRecommendModal = ({
  open,
  onOpenChange,
  category,
  closeModal,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: ValidCategory;
  closeModal: () => void;
}) => {
  const { selectedRecommend } = useModals();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedRecommend
              ? `Edit '${selectedRecommend.name}'`
              : `Add a new recommendation for ${category}`}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Modal for adding a new recommendation
        </DialogDescription>
        <div className="mt-4">
          <AddRecommendForm category={category} closeModal={closeModal} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddRecommendModal;
