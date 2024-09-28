import { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog/Dialog";
import { ValidCategory } from "@/types/globalTypes";

const AddRecommendModal = ({
  children,
  open,
  onOpenChange,
  category,
}: {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: ValidCategory;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={"Modal for adding a new recommendation"}>
        <DialogHeader>
          <DialogTitle>{`Add a new recommendation for ${category}`}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Modal for adding a new recommendation
        </DialogDescription>
        <div className="mt-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default AddRecommendModal;
