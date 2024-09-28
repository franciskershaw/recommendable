import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog/Dialog";
// import { Form } from "@/components/ui/Form/Form";
import { ValidCategory } from "@/types/globalTypes";

const AddRecommendModal = ({
  open,
  onOpenChange,
  category,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: ValidCategory;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`Add a new recommendation for ${category}`}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Modal for adding a new recommendation
        </DialogDescription>
        <div className="mt-4">
          {/* Add Recommendation form here */}
          {/* <Form></Form> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddRecommendModal;
