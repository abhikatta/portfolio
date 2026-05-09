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
        "font-syne mt-4 text-4xl font-black md:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
