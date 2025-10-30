import { createContext, useContext, useState, useCallback } from "react";

const JoinModalContext = createContext();

export const JoinModalProvider = ({ children }) => {
  const [joined, setJoined] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  const openJoinModal = useCallback(() => setJoinModalOpen(true), []);
  const closeJoinModal = useCallback(() => setJoinModalOpen(false), []);
  const onJoinSuccess = useCallback(() => setJoined(true), []);

  return (
    <JoinModalContext.Provider
      value={{
        joined,
        joinModalOpen,
        openJoinModal,
        closeJoinModal,
        onJoinSuccess,
      }}
    >
      {children}
    </JoinModalContext.Provider>
  );
};

// Easy access hook
export const useJoinModal = () => useContext(JoinModalContext);
