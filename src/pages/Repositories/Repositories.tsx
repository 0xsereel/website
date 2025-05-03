import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";

export const Repositories = () => {
  const whitepapers = [
    {
      title: "Ethereum Whitepaper",
      link: "https://ethereum.org/en/whitepaper/",
    },
    {
      title: "A Comprehensive Review of the TLSNotary Protocol",
      link: "https://arxiv.org/abs/2409.17670",
    },
    {
      title: "Programmable Cryptography 0xPARC",
      link: "https://0xparc.org/blog/programmable-cryptography-1",
    },
    {
      title: "The God Protocols",
      link: "https://nakamotoinstitute.org/library/the-god-protocols/",
    },
    {
      title: "Web Data Authentication with Garble-Then-Prove",
      link: "https://eprint.iacr.org/2023/964",
    },
  ];

  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-[300px] bg-black flex items-center justify-center bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30">
        <h1 className="text-white text-4xl font-bold">Research Repository</h1>
      </div>

      <div className="w-full bg-black py-10 px-5">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            Whitepapers That Inspire Us
          </h2>
          <ul className="list-disc list-inside text-[#D5D5D5]">
            {whitepapers.map((paper, index) => (
              <li key={index} className="mb-4">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CA36E] hover:underline"
                >
                  {paper.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};