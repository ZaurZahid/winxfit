import { useJoinModal } from "../../context/JoinModalContext";
import JoinListModal from "./JoinListModal";

const JoinListModalWrapper = () => {
  const { joined, joinModalOpen, closeJoinModal, onJoinSuccess } =
    useJoinModal();

  return (
    <JoinListModal
      joined={joined}
      opened={joinModalOpen}
      onClose={closeJoinModal}
      onSuccess={onJoinSuccess}
    />
  );
};

export default JoinListModalWrapper;
