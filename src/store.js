import React, { useState } from "react";

import { hardSkills } from "./data/hardSkills";

export const Store = React.createContext(null);

// const logMessage = message => {
//   console.log(message);
// };
export const StoreProvider = props => {
  // const [state1Value, setState1Value] = useState(1);
  const contextValue = {
    hardSkills
  };
  return (
    <Store.Provider value={contextValue}>{props.children}</Store.Provider>
  );
};
