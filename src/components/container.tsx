import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

const Container = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="px-4 md:px-6">
      <div {...props} className={cn("mx-auto max-w-[1728px]", className)}>
        {children}
      </div>
    </div>
  );
};

export default Container;
