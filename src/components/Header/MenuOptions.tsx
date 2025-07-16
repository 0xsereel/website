import { Link } from "react-router-dom";

export const MenuOptions = ({ isOpen }: { isOpen: boolean }) => {
  const menuItems = [
    { label: "Wallet", link: "/solutions/wallet" },
    { label: "Tokenization", link: "/solutions/tokenization" },
    { label: "DeFi", link: "/solutions/defi" },
  ];

  const getIcon = (index: number) => {
    switch (index) {
      case 0: // Shield icon
        return (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.8C12 22.8 20 18.8 20 12.8V5.80005L12 2.80005L4 5.80005V12.8C4 18.8 12 22.8 12 22.8Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 1: // Lightning bolt icon
        return (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2.80005L4 12.8H11L10 22.8L19 12.8H12L13 2.80005Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 2: // DeFi icon
        return (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9.80005H8C9.10457 9.80005 10 10.6955 10 11.8V20.8H6C4.89543 20.8 4 19.9046 4 18.8V11.8C4 10.6955 4.89543 9.80005 6 9.80005Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 4.80005H16C17.1046 4.80005 18 5.69548 18 6.80005V20.8H14V4.80005Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 20.8H22"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 20.8H4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 7.80005H12C13.1046 7.80005 14 8.69548 14 9.80005V20.8H10V7.80005Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-[300px] absolute top-0 left-0 mt-20 z-20 lg:block hidden">
      <div
        className={`w-fit h-auto border border-[#202026] bg-black ml-40 rounded-b-xl flex items-center justify-between p-5 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link} className="w-full flex items-center gap-2 mt-5 first:mt-0">
              <div className="w-[50px] h-[50px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
                {getIcon(index)}
              </div>
              <div>
                <p className="text-md">{item.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
