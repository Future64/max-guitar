import React, { useState, useEffect, useContext } from "react";
import { UserInputContext } from "../../context/userInputContext";
import Select from "../select/Select";
import "./Form.css";

function Form() {
  const { userInputs } = useContext(UserInputContext);
  const { handleInputChange } = useContext(UserInputContext);

  const alt = ["b", "#"];
  const notesFlat = ["C", "Db", "Eb", "F", "Gb", "Ab", "Bb"];
  const notesSharp = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const scales = [
    "Pentatonique majeure",
    "Pentatonique mineure",
    "Gamme majeure naturel",
    "Gamme mineure naturel",
    "Gamme mineure Harmonique",
    "Gamme mineure Mélodique",
  ];

  function saveSubmit(e) {
    e.preventDefault();
    console.log(userInputs);
  }
  return (
    <form
      id="form"
      className="form"
      onSubmit={(e) => {
        saveSubmit(e);
      }}
    >
      <div className="selectBox">
        <Select value={alt} name="Altération" id="alt" key="123key" />
        {userInputs.alt === "#" ? (
          <Select value={notesSharp} name="Tonique" id="note" key="223key" />
        ) : (
          <Select value={notesFlat} name="Tonique" id="note" key="323key" />
        )}
        <Select value={scales} name="Gammes" id="scale" key="423key" />
      </div>

      <button form="form" type="submit" className="btn btn-success buttonValid">
        Valider
      </button>
    </form>
  );
}
export default Form;
