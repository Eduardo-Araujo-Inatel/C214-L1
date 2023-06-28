import { useStore } from 'hooks/useStore';
import { TitleDiv } from './styles';
import { useEffect, useState } from 'react';

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
		</TitleDiv>
	);
}

export default Footer;