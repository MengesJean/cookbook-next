"use client";

import { cn } from "@/lib/utils";
import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "border border-gray-300 rounded-md p-2 w-full text-gray-900 mb-1",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
