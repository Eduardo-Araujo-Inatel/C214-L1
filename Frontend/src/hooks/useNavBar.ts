import { NavBarContext } from "context/NavBarContext";
import { useContext } from "react";

export function useNavBar() {
  const value = useContext(NavBarContext);
  return value;
}
