import { useState } from "react";
import Modal from "react-modal";
import { BsSearch } from "react-icons/bs";
import { ContainerAbout, ContainerCategories, ContainerImage, ContainerInfo, ContainerPrice } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    display: "flex"
  },
};

interface InfoProps {
  name: string;
  url: string;
  price: number;
  categories: string[];
  about: string;
}

function ShowMoreInfoModal({ name, url, price, categories, about }: InfoProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <BsSearch onClick={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ContainerInfo>
          <div>
            <h2>{name}</h2>
            <ContainerAbout>{about}</ContainerAbout>
            <button onClick={closeModal}>Fechar</button>
          </div>
          <div>
            <ContainerImage>
              <img alt="Preview" src={url} width={50} />
            </ContainerImage>
            <ContainerPrice>R$ {price.toFixed(2)}</ContainerPrice>
            <ContainerCategories>{categories.join(", ")}</ContainerCategories>
          </div>
        </ContainerInfo>

      </Modal>
    </div>
  );
};

export default ShowMoreInfoModal;