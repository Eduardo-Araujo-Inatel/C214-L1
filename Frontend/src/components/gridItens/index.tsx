import Card from "components/card";
import { GridContainer } from "./styles";

interface GridItensProps {
	games: any[]
}

function GridItens({ games }: GridItensProps) {

	return (
		<>
			<GridContainer>
				{games && games?.map((game: any, index: any) =>
					<Card gameObj={game} name={game?.Titulo} url={game?.Url} price={game?.Preco} categories={game?.Categorias} about={game?.Sobre} key={index} />
				)}
			</GridContainer>
		</>
	);
}

export default GridItens;