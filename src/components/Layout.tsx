import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { MobileMenu } from "./Header/MobileMenu";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <MobileMenu />
      <Outlet />
      <Footer />
    </>
  );
};
