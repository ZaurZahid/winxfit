import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import JoinListModalWrapper from "./JoinListModalWrapper";
import { JoinModalProvider } from "../../context/JoinModalContext";

const Layout = ({ children }) => {
  return (
    <JoinModalProvider>
      <div className="bg-gray-100 relative">
        <div className="min-h-screen w-full flex justify-center overflow-hidden">
          <Header />
          <main className="max-w-[1536px] w-full mt-28 sm:mt-40 xl:mt-28">
            {children}
          </main>
        </div>
        <Footer />

        <CookieConsent />
        <JoinListModalWrapper />
      </div>
    </JoinModalProvider>
  );
};

export default Layout;
