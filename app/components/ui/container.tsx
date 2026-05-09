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
        "mx-auto flex w-full max-w-[1720px] flex-col items-start justify-center px-6 lg:scroll-mt-[15vh]",
        wantSpacing && "my-10 py-12 lg:my-20",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
});

Container.displayName = "Container";

export default Container;
