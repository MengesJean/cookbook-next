import { useState } from "react";

interface UseConfirmProps {
  onConfirm: () => void;
  onCancel?: () => void;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive";
}

const useConfirm = ({
  onConfirm,
  onCancel,
  title,
  description,
  confirmText,
  cancelText,
  variant,
}: UseConfirmProps) => {
  const [open, setOpen] = useState(false);

  return {
    open,
    setOpen,
    confirmProps: {
      open,
      onOpenChange: setOpen,
      onConfirm,
      onCancel,
      title,
      description,
      confirmText,
      cancelText,
      variant,
    },
  };
};

export default useConfirm;
