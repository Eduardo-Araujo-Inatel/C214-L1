import { useState } from "react";
import Modal from "react-modal";
import { NavBarOption, Title } from "components/headerBar/styles";
import { TitleDiv } from "components/footerBar/styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: "auto",
    display: "flex"
  },
};

interface BuyModalProps {
  price: number;
}

function BuyModal({ price }: BuyModalProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <NavBarOption onClick={openModal}>Comprar</NavBarOption>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <TitleDiv>
          <Title>Compra realizada com sucesso</Title>
          Total: R$ {price.toFixed(2)}
        </TitleDiv>
      </Modal>
    </div>
  );
};

export default BuyModal;