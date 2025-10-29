import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import JoinListModal from "./JoinList";

const Layout = ({ children }) => {
  const [joined, setJoined] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  const onJoinSuccess = () => {
    setJoined(true);
  };

  const onOpenJoinModal = () => {
    setJoinModalOpen(true);
  };

  const onCloseJoinModal = () => {
    setJoined(false);
    setJoinModalOpen(false);
  };

  return (
    <div className="bg-gray-100 relative">
      <div className="min-h-screen w-full flex justify-center overflow-hidden">
        <Header onOpen={onOpenJoinModal} />
        <main className="max-w-[1536px] w-full mt-28 sm:mt-40 xl:mt-28">
          {children}
        </main>
      </div>
      <Footer />

      {/* <Footer siteData={siteData} />
            <CookieConsent />
            <JoinListModal onSuccess={onJoinSuccess} joined={joined} opened={joinModalOpen} onClose={onCloseJoinModal} /> */}
    </div>
  );
};

export default Layout;
