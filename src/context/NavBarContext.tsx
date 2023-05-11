import { createContext, ReactNode, useEffect, useState } from "react";

type NavBar = {
  currentSelected: string;
  setCurrentSelected: (option: string) => void;
};

type NavBarProps = {
  children: ReactNode;
};

const NavBarContext = createContext({} as NavBar);

function NavBarProvider({ children }: NavBarProps) {
  const [currentSelected, setCurrentSelected] = useState<string>("");
  
  return (
    <NavBarContext.Provider
      value={{ currentSelected, setCurrentSelected } as NavBar}
    >
      {children}
    </NavBarContext.Provider>
  );
}

export { NavBarContext, NavBarProvider };
