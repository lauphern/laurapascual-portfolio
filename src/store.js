import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { hardSkills } from "./data/hardSkills";
import { projects } from "./data/projects";

export const Store = React.createContext(null);

export const StoreProvider = props => {

  const contextValue = {
    hardSkills,
    projects,
    mediaQueries: {
      isItSmallDevice: useMediaQuery("(max-width:400px)"),
      isItSmallTablet: useMediaQuery("(max-width:834px)"),
      isItTablet: useMediaQuery("(max-width:1100px)"),
      isItSmallThanLaptop: useMediaQuery("(max-width:1199px)"),
      isItShortHeight: useMediaQuery("(max-height:600px)")
    }
  };
  return (
    <Store.Provider value={contextValue}>{props.children}</Store.Provider>
  );
};
