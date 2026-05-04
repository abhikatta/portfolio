import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

const Container = forwardRef<
  HTMLElement,
  ComponentProps<"section"> & { wantSpacing?: boolean }
>(({ children, className, wantSpacing, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        "mx-auto max-w-[1720px] w-full px-6 flex flex-col items-start justify-center scroll-mt-[15vh]",
        wantSpacing && "py-12 my-20 lg:my-50",
        className,
      )}
      {...props}>
      {children}
    </section>
  );
});

Container.displayName = "Container";

export default Container;
