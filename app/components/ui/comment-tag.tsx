import { cn } from "@/lib/utils";

const CommentTag = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("mb-10 text-xs tracking-widest uppercase", className)}>
      {"// "}
      {children}
    </p>
  );
};

export default CommentTag;
