import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

type TLayout = {
  authRequired?: boolean;
  showLogo?: boolean;
  children: ReactNode;
};

const Layout = ({ children }: TLayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
