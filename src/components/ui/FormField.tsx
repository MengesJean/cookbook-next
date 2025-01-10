import { cn } from "@/lib/utils";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
  label?: string;
  value?: string;
  render?: (props: {
    field: UseFormRegisterReturn & { value?: string };
  }) => React.ReactNode;
}

const FormField = ({
  register,
  error,
  className,
  label,
  value,
  render,
}: FormFieldProps) => {
  return (
    <div className={cn("mb-2", className)}>
      {label && (
        <label
          htmlFor={register.name}
          className="block text-sm font-medium capitalize"
        >
          {label}
        </label>
      )}
      {render ? (
        render({ field: { ...register, value } })
      ) : (
        <input {...register} value={value} className="w-full" />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;
