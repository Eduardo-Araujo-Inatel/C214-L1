import { useState } from "react";
import Modal from "react-modal";
import { BsSearch } from "react-icons/bs";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ShowMoreInfoModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <BsSearch onClick={openModal}/>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Exemplo de Modal</h2>
        <p>Conteúdo do modal</p>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
};

export default ShowMoreInfoModal;