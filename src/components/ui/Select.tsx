"use client";

import { cn } from "@/lib/utils";
import React from "react";
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  values: string[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, values, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "border border-gray-300 rounded-md p-2 w-full text-gray-900 mb-1",
          className
        )}
        {...props}
      >
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select;
