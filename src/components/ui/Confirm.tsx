import { cn } from "@/lib/utils";
import { Button } from "./Button";
import Typography from "./Typography";

interface ConfirmProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive";
}

const Confirm = ({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "destructive",
}: ConfirmProps) => {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",
        open ? "flex" : "hidden"
      )}
    >
      <div className="bg-white p-6 rounded-md shadow-md max-w-4xl">
        <Typography variant="h2" tag="h2" className="mb-4 text-gray-900">
          {title}
        </Typography>
        {description && (
          <Typography variant="text" className="text-gray-500 mb-8">
            {description}
          </Typography>
        )}
        <div className="flex justify-end gap-2">
          <Button onClick={handleCancel}>{cancelText}</Button>
          <Button onClick={handleConfirm} variant={variant}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
