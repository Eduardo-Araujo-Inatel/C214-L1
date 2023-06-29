import { NavBar, NavBarOption, Title, TitleDiv } from './styles';
import ShowAddItemModal from 'components/modal/addItem';

function Header() {

	return (
		<TitleDiv>
			<Title>Trabalho de C214 - Loja de Games</Title>
			<NavBar>
				<NavBarOption>Loja</NavBarOption>
				<ShowAddItemModal />
			</NavBar>
		</TitleDiv>
	);
}

export default Header;