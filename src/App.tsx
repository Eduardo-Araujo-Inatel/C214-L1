import Filters from 'components/filters';
import { StoreBody } from 'components/filters/styles';
import GridItens from 'components/gridItens';
import Header from 'components/headerBar';
import { NavBarProvider } from 'context/NavBarContext';
import 'styles/App.css';

function App() {
  return (
    <NavBarProvider>
      <div className="App">
        <Header />
        <StoreBody>
          <Filters />
          <GridItens />
        </StoreBody>
      </div>
    </NavBarProvider>
  );
}

export default App;
