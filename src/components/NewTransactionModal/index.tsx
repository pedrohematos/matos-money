import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  const { isOpen, onRequestClose } = props;
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Register transaction</h2>
    </Modal>
  );
}
