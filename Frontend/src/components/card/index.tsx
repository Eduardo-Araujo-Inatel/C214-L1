import ShowMoreInfoModal from "components/modal/info";
import { CardBody, CardCategory, CardName, CardPrice, CardSelect } from "./styles";
import { useState } from "react";
import { BsCartPlus, BsCartX } from 'react-icons/bs';
import { useStore } from "hooks/useStore";

interface CardProps {
    name: string;
    url: string;
    price: number;
    categories: string[];
    about: string;
    gameObj: any;
}

function Card({ name, url, price, categories, about, gameObj }: CardProps) {
    const [isSelected, setIsSelected] = useState(false);
    const { purchaseList, setPurchaseList } = useStore();

    function selectItem() {
        setIsSelected(true)
        let purchase = new Map(purchaseList);
        purchase.set(gameObj._id, gameObj)
        setPurchaseList(purchase);
    }

    function unSelectItem() {
        setIsSelected(false)
        let purchase = new Map(purchaseList);
        purchase.delete(gameObj._id)
        setPurchaseList(purchase);
    }

    return (
        <CardBody>
            <img src={url} alt={name} />
            <CardName>{name}</CardName>
            <CardCategory>{categories.join(", ")}</CardCategory>
            <CardPrice>R$ {price.toFixed(2)}</CardPrice>
            <CardSelect>
                <ShowMoreInfoModal name={name} url={url} price={price} categories={categories} about={about} />
                <div>
                    {isSelected ? <BsCartX onClick={unSelectItem} style={{ color: "red" }} /> : <BsCartPlus onClick={selectItem} style={{ color: "green" }} />}
                </div>
            </CardSelect>
        </CardBody>
    );
}

export default Card;