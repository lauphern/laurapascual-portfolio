import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { hardSkills } from "./data/hardSkills";

export const Store = React.createContext(null);

export const StoreProvider = props => {

  const contextValue = {
    hardSkills,
    mediaQueries: {
      isItSmallDevice: useMediaQuery("(max-width:400px)"),
      isItSmallTablet: useMediaQuery("(max-width:834px)"),
      isItTablet: useMediaQuery("(max-width:1100px)"),
      isItSmallThanLaptop: useMediaQuery("(max-width:1199px)")
    }
  };
  return (
    <Store.Provider value={contextValue}>{props.children}</Store.Provider>
  );
};
