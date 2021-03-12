import "./index.css";

import Header from "../Header";
import Footer from "../Footer";

import { Theme } from "../../contexts";

function Layout({ children }) {
  return (
    <>
      <Theme.Provider initial="dark">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </Theme.Provider>
    </>
  );
}

export default Layout;
