import React, { useState, useEffect, useContext } from "react";
import { UserInputContext } from "../../context/userInputContext";
import String from "../strings/Strings";
import FlagBox from "../flagBox/FlagBox";
import Form from "../form/Form";
import "./Guitar.css";

function Guitar() {
  const { userInputs } = useContext(UserInputContext);
  const { handleInputChange } = useContext(UserInputContext);

  function saveSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="Guitar">
      <String props={userInputs} />
      <FlagBox />
      <Form />
    </div>
  );
}

export default Guitar;
