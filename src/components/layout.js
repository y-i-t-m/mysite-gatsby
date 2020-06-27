import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

import "./layout.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Layout({ children }) {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <main>{children}</main>
      <Footer />
    </>
=======
      {children}
      <Footer />
    </div>
>>>>>>> 17305be0d09ba8954486a56eca25423611d6cff2
  );
}
