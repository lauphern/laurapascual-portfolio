import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useAppStyles } from "../style/useStyles";

const Type = props => {
  const appClasses = useAppStyles();
  return <span className={appClasses.type}>_</span>;
};

//Code based on: https://stackoverflow.com/questions/59786811/typewriter-effect-in-react

const Typewriter = props => {
  const isItSmallDevice = useMediaQuery("(max-width:400px)");

  const appClasses = useAppStyles();

  const fullName = { 0: "Laura", 1: "Pascual" };
  const [{ name, i }, setName] = useState({ name: "", i: 0 });
  const [{ lastName, j }, setLastName] = useState({ lastName: "", j: 0 });

  useEffect(() => {
    if (i === fullName["0"].length) {
      if (j === fullName["1"].length) return;
      const delay = setTimeout(() => {
        setLastName({ lastName: lastName + fullName["1"][j], j: j + 1 });
        clearTimeout(delay);
      }, 200);
    } else {
      const delay = setTimeout(() => {
        setName({ name: name + fullName["0"][i], i: i + 1 });
        clearTimeout(delay);
      }, 200);
    }
  }, [name, lastName]);

  return (
    <Typography variant="h1" align="left" className={isItSmallDevice && appClasses.h1Mobile}>
      <span className={appClasses.firstName}>
        {name}
        {i < fullName["0"].length && <Type />}
      </span>
      <br />
      {lastName ? lastName : <span>&nbsp;</span>}
      {i === fullName["0"].length && <Type />}
    </Typography>
  );
};

export default Typewriter;
