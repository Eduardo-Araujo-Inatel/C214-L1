import Dropdown from "components/dropdown";
import { FiltersBody } from "./styles";

const options = [
    { value: "apple", label: "Maçã" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Laranja" },
  ];
  
function Filters() {

    return (
        <FiltersBody>
            <Dropdown label={"Categorias:"} isMultiValue options={options}/>
            <Dropdown label={"Plataforma:"} options={options}/>
        </FiltersBody>
    );
}

export default Filters;