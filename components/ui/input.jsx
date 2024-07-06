import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ name, onChange, value, className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[48px] border rounded-md font-light border-white/10 focus:border-accent bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none",
          className
        )}
        ref={ref}
        onChange={onChange}
        value={value}
        name={name}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
