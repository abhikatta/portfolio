import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

const Container = forwardRef<HTMLElement, ComponentProps<"section">>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "mx-auto max-w-[1720px] w-full px-6 py-12 my-20 lg:my-50",
          className,
        )}
        {...props}>
        {children}
      </section>
    );
  },
);

Container.displayName = "Container";

export default Container;
