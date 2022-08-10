import React, { createContext, useState } from "react";

export const UserInputContext = createContext();

const UserInputContextProvider = (props) => {
  const [userInputs, setUserInputs] = useState({
    alt: "",
    note: "",
    scale: "",
  });

  const handleInputChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.id]: e.target.value });
  };

  return (
    <UserInputContext.Provider value={{ handleInputChange, userInputs }}>
      {props.children}
    </UserInputContext.Provider>
  );
};

export default UserInputContextProvider;
