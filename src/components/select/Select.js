import React, { useContext } from "react";
import { UserInputContext } from "../../context/userInputContext";
import "./Select.css";

function Select(props) {
  const { handleInputChange } = useContext(UserInputContext);
  return (
    <select
      className="form-select form-select-lg mb-3 selectForm"
      aria-label=".form-select-lg example"
      id={props.id}
      onChange={handleInputChange}
    >
      <option defaultValue>{props.name}</option>
      {props.value.map((option, index) => {
        return (
          <>
            <option key={`${option}-${index}`} value={option}>
              {option}
            </option>
          </>
        );
      })}
    </select>
  );
}
export default Select;
