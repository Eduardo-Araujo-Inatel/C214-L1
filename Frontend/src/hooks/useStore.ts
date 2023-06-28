import { StoreContext } from "context/StoreContext";
import { useContext } from "react";

export function useStore() {
  const value = useContext(StoreContext);
  return value;
}
