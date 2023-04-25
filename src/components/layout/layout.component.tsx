// import Navbar from './navbar'
// import Footer from './footer'
import { FC, ReactNode } from "react";
import Footer from "../footer/footer.component";
import Navbar from "../navbar/navbar.component";

type LayoutProps = {
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
