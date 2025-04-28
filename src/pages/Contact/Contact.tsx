import { MobileMenu } from "../../components/Header/MobileMenu";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ContactContent } from "../../components/Contact/ContactContent";
export const Contact = () => {
  return (
    <div className="w-full">
      <Header />
      <MobileMenu />
      <ContactContent />
      <Footer />
    </div>
  );
};
