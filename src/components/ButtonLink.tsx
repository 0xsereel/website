import { MdArrowOutward } from "react-icons/md";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: string;
  testId: string;
};

export const ButtonLink = ({
  href,
  variant = "primary",
  children,
  testId,
}: ButtonLinkProps) => {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-[#1AA16C] text-[#0A0E13] hover:bg-[#77DEAF]"
      : "border border-[rgba(152,162,179,0.26)] text-[#F2F4F7] hover:border-[#1AA16C] hover:text-[#77DEAF]";
  return (
    <a href={href} data-testid={testId} className={`${base} ${styles}`}>
      {children}
      {variant === "primary" && <MdArrowOutward className="text-base" />}
    </a>
  );
};
