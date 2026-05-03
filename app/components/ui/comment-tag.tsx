import { cn } from "@/lib/utils";

const CommentTag = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-xs uppercase tracking-widest mb-10", className)}>
      {"// "}
      {children}
    </p>
  );
};

export default CommentTag;
