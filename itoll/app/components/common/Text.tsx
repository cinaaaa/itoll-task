import type TextProps from "@/app/types/common";

const Text: React.FC<TextProps> = ({ size = "md", children }) => {
  const className = `text-black text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
