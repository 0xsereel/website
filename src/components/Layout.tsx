import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header/Header";
import { MobileMenu } from "./Header/MobileMenu";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <MobileMenu />
      <Outlet />
      <Footer />
    </>
  );
};
