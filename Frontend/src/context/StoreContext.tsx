import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

type Store = {
  listGames: any[];
  setListGames: (option: any) => void;
  listGamesFilted: any[];
  setListGamesFilted: (option: any) => void;
  categoriesSelected: string[];
  setCategoriesSelected: (option: any) => void;
  purchaseList: Map<any, any>;
  setPurchaseList: (option: Map<any, any>) => void;
};

type StoreProps = {
  children: ReactNode;
};

const StoreContext = createContext({} as Store);

function StoreProvider({ children }: StoreProps) {
  const [listGames, setListGames] = useState<any[]>([]);
  const [listGamesFilted, setListGamesFilted] = useState<any[]>([]);
  const [categoriesSelected, setCategoriesSelected] = useState<any[]>([]);
  const [purchaseList, setPurchaseList] = useState(new Map());

  useEffect(() => {
    axios.get("http://localhost:4000/games/listAll")
      .then((response => {
        setListGames(response?.data)
      }))
  }, []);

  useEffect(() => {
    if (categoriesSelected && categoriesSelected.length > 0) {
      const objetosFiltrados = listGames.filter(objeto => {
        for (const categoria of categoriesSelected) {
          if (!objeto.Categorias.includes(categoria)) {
            return false;
          }
        }
        return true;
      });
      setListGamesFilted(objetosFiltrados)
    } else {
      setListGamesFilted(listGames)
    }
  }, [categoriesSelected, listGames]);
  
  return (
    <StoreContext.Provider
      value={{
        listGames, setListGames,
        listGamesFilted, setListGamesFilted,
        categoriesSelected, setCategoriesSelected,
        purchaseList, setPurchaseList
      } as Store}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };
