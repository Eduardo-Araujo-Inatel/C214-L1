import { useStore } from 'hooks/useStore';
import { TitleDiv } from './styles';
import { useEffect, useState } from 'react';
import BuyModal from 'components/modal/buy';

function Footer() {
	const { purchaseList } = useStore();
	const [price, setPrice] = useState<number>(0);

	useEffect(() => {
		let somaPrecos = 0;

		purchaseList.forEach((object) => {
			const preco = object.Preco;
			somaPrecos += preco;
		})

		setPrice(somaPrecos)
	}, [purchaseList]);


	return (
		<TitleDiv>
			R$ {price.toFixed(2)}
			<BuyModal price={price} />
		</TitleDiv>
	);
}

export default Footer;