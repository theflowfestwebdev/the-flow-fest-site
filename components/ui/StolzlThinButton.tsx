"use client";

import * as React from "react";
import {Button, ButtonProps} from "./button";

const StolzlThinButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, ...props}, ref) => (
    <Button
      ref={ref}
      className={
        `px-6 py-2 border rounded-full text-[#8B7C6B] border-[#8B7C6B] bg-transparent font-normal uppercase tracking-[0.18em] text-sm shadow-none transition-all duration-200 hover:bg-[#8B7C6B] hover:text-white` +
        ` ` +
        className
      }
      style={{
        fontFamily: "Stolzl Book, sans-serif",
        fontWeight: 400,
        ...(props.style || {}),
      }}
      {...props}
    />
  )
);
StolzlThinButton.displayName = "StolzlThinButton";

export default StolzlThinButton;
