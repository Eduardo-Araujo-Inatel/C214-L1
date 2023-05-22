import React from "react";
import Select from "react-select";
import { FiltersLabel } from "./styles";

interface DropdownProps {
  label: string;
  isMultiValue?: boolean;
  options: any;
}

function Dropdown({ label, isMultiValue = false, options }: DropdownProps) {
  return (
    <div>
      <FiltersLabel>{label}</FiltersLabel>
      <Select options={options} isMulti={isMultiValue}/>
    </div>
  );
};

export default Dropdown;