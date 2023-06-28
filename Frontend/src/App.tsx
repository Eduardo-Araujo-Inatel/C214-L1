import Filters from 'components/filters';
import { StoreBody } from 'components/filters/styles';
import Footer from 'components/footerBar';
import GridItens from 'components/gridItens';
import Header from 'components/headerBar';
import { useStore } from 'hooks/useStore';
import 'styles/App.css';

function App() {
  const { listGamesFilted, listGames } = useStore();

  return (
    <div className="App">
      <Header />
      <StoreBody>
        <Filters games={listGames} />
        <GridItens games={listGamesFilted} />
      </StoreBody>
      <Footer/>
    </div>
  );
}

export default App;
