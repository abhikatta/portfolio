import { cn } from "@/lib/utils";

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-2xl min-[390px]:text-3xl md:text-4xl font-syne tracking-tighter",
        className,
      )}>
      {children}
    </h2>
  );
};

export default SectionTitle;
