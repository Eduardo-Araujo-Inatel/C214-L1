import ShowMoreInfoModal from "components/modal";
import { CardBody, CardCategory, CardName, CardPrice, CardSelect } from "./styles";
import { useState } from "react";
import { BsCartPlus, BsCartX } from 'react-icons/bs';

function Card() {

    const [isSelected, setIsSelected] = useState(false);

    function selectItem() {
        setIsSelected(true)
    }

    function unSelectItem() {
        setIsSelected(false)
    }

    return (
        <CardBody>
            <img src="https://upload.wikimedia.org/wikipedia/pt/0/0d/Elden_Ring_capa.jpg" alt="" />
            <CardName>Elden Ring</CardName>
            <CardCategory>RPG, Mundo aberto</CardCategory>
            <CardPrice>R$ 199,90</CardPrice>
            <CardSelect>
                <ShowMoreInfoModal />
                {isSelected ? <BsCartX onClick={unSelectItem} /> : <BsCartPlus onClick={selectItem} />}
            </CardSelect>
        </CardBody>
    );
}

export default Card;