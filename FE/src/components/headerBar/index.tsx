import { useNavBar } from 'hooks/useNavBar';
import { NavBar, NavBarOption, Title, TitleDiv } from './styles';

function Header() {
    const { setCurrentSelected } = useNavBar();

    return (
        <TitleDiv>
            <Title>Trabalho de C214 - Loja de Games</Title>
            <NavBar>
                <NavBarOption onClick={()=>setCurrentSelected("store")}>Loja</NavBarOption>
                <NavBarOption onClick={()=>setCurrentSelected("newItem")}>Adicionar item a loja</NavBarOption>
            </NavBar>
        </TitleDiv>
    );
}

export default Header;