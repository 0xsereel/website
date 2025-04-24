export const MenuOptions = ({ isOpen }: { isOpen: boolean }) => {
  const menuItems = [
    { label: "Noncustodial Wallet Service" },
    { label: "Tokenization" },
    { label: "Identity" },
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
      case 2: // User icon
        return (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12.8C14.2091 12.8 16 11.0092 16 8.80005C16 6.59091 14.2091 4.80005 12 4.80005C9.79086 4.80005 8 6.59091 8 8.80005C8 11.0092 9.79086 12.8 12 12.8Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 20.8C4 17.6 7.6 14.8 12 14.8C16.4 14.8 20 17.6 20 20.8"
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
            <div key={index} className="w-full flex items-center gap-2 mt-5 first:mt-0">
              <div className="w-[50px] h-[50px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
                {getIcon(index)}
              </div>
              <div>
                <p className="text-md">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
