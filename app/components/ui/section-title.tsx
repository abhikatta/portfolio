import { cn } from "@/lib/utils";

const SectionTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      {...props}
      className={cn(
        "mt-4 font-syne font-black text-4xl md:text-6xl",
        className,
      )}>
      {children}
    </h2>
  );
};

export default SectionTitle;
