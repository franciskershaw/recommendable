import { Button } from "@/components/ui/Button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog/Dialog";
import useDeleteRecommend from "@/hooks/recommends/useDeleteRecommend";
import { Recommend } from "@/types/globalTypes";

const DeleteRecommendConfirmation = ({
  recommend,
  open,
  onOpenChange,
  closeModal,
}: {
  recommend: Recommend | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  closeModal: () => void;
}) => {
  const deleteRecommend = useDeleteRecommend();

  const onDelete = () => {
    if (recommend?._id) {
      deleteRecommend.mutate(
        { _id: recommend?._id },
        { onSuccess: closeModal }
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Confirm deletion
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Modal for confirming deletion
        </DialogDescription>
        <div className="text-center space-y-5">
          <div className="">
            <p>Are you sure you want to delete '{recommend?.name}'?</p>
            <p className="font-bold">This action cannot be undone.</p>
          </div>

          <div className="flex justify-center items-center gap-6">
            <Button variant={"outline"} onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={onDelete} variant={"destructive"}>
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteRecommendConfirmation;
