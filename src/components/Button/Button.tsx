import { ReactNode } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="bg-[#1CA36E] text-white px-4 py-2 rounded-full border border-[#00FFB21A] cursor-pointer flex items-center justify-center" onClick={onClick}>
      {children}
      <MdOutlineArrowOutward className="ml-2" />
    </button>
  );
};
