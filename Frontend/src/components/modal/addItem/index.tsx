import { useState } from "react";
import Modal from "react-modal";
import { NavBarOption } from "components/headerBar/styles";
import { ContainerImage, FormNewItem } from "./styles";
import { Input } from "components/formHook/Input";
import { Form, useForm } from "react-hook-form";
import { TextArea } from "components/formHook/TextArea";
import Dropdown from "components/formHook/Dropdown";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 451,
    height: 'auto'
  },
};

const options = [
  { value: "RPG", label: "RPG" },
  { value: "Ação", label: "Ação" },
  { value: "Mundo Aberto", label: "Mundo Aberto" },
  { value: "FPS", label: "FPS" },
];

function ShowAddItemModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { control, register, watch, formState: { errors } } = useForm()
  const urlImage = watch("Imagem");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(toSubmit: any) {
    toSubmit.data.Preco = Number(toSubmit.data.Preco)
    toSubmit.data.Categorias = toSubmit.data.Categorias.map((category: any)=>category?.value)
    axios.post("http://localhost:4000/games/create", toSubmit.data)
      .then((response => {
        console.log(response.data)
      }))
  }

  return (
    <div>
      <NavBarOption onClick={openModal}>Adicionar item a loja</NavBarOption>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Form onSubmit={handleSubmit} control={control}>
          <FormNewItem>
            <h2>Adicionar jogo para a loja</h2>
            <div>
              <label htmlFor="">Nome do Jogo:</label>
              <Input
                control={control}
                type="text"
                error={errors.Titulo}
                {...register("Titulo", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="">Preço:</label>
              <Input
                control={control}
                type="text"
                error={errors.Preco}
                {...register("Preco", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="">Sobre:</label>
              <TextArea
                control={control}
                type="text"
                error={errors.Sobre}
                cols="30" rows="10"
                {...register("Sobre", { required: true })}
              />

            </div>
            <div>
              <label htmlFor="">Categorias:</label>
              <Dropdown
                control={control}
                options={options}
                error={errors.Categorias}
                placeholder={""}
                isMulti
                {...register("Categorias", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="">URL imagem:</label>
              <Input
                control={control}
                type="text"
                error={errors.Imagem}
                {...register("Imagem", { required: true })}
              />
            </div>
            <label htmlFor="">Preview da imagem:</label>
            <ContainerImage>
              <img alt="Preview" src={urlImage} height={200} />
            </ContainerImage>
            <button type="submit" >Adicionar</button>
            <button onClick={closeModal} type="button">Fechar</button>
          </FormNewItem>
        </Form>
      </Modal>
    </div>
  );
};

export default ShowAddItemModal;