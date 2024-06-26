import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Box({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        `bg-neutral-900
       rounded-lg
       h-fit
       w-full`,
        className
      )}
    >
      {children}
    </div>
  );
}
