import React, { useState } from "react";
import { Typography, ButtonGroup, Button, Link, Grid, Chip, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useBioStyles } from "../style/useStyles";

import { translations } from "../data/translations";
import { hardSkills } from "../data/hardSkills";

const Bio = props => {
  const [lang, setLang] = useState("es");
  const classes = useBioStyles();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      className={`${classes.leftPanel} ${props.isItSmallTablet && classes.stacksMobile}`}
      container
      justify="center"
    >
      <ButtonGroup variant="text" size="small" className={classes.languageSwitch}>
        <Button
          onClick={() => setLang("en")}
          className={`${classes.pointer} ${classes.link} ${classes.languageBtn} ${
            lang === "en" && classes.languageBtnActive
          }`}
        >
          EN
        </Button>
        <Button
          onClick={() => setLang("es")}
          className={`${classes.pointer} ${classes.link} ${classes.languageBtn} ${
            lang === "es" && classes.languageBtnActive
          }`}
        >
          ES
        </Button>
      </ButtonGroup>
      <Typography variant="h1" className={props.isItSmallDevice && classes.h1Mobile}>
        <span className={classes.firstName}>Laura</span>
        <br />
        Pascual
      </Typography>
      <Typography variant="h2" className={props.isItSmallDevice && classes.h2Mobile}>
        {translations[lang].subtitle}
      </Typography>
      <Box className={classes.skillsContainer}>
        {hardSkills.map(skillName => (
          <Chip
            label={skillName}
            size="small"
            className={`${classes.hardSkill} ${classes.link} ${classes.pointer}`}
          />
        ))}
      </Box>
      <Typography variant="body1">
        <Link
          className={`${classes.pointer} ${classes.link}`}
          href="mailto:laura.pascual.h@hotmail.com"
        >
          Email
        </Link>{" "}
      </Typography>
      <Typography variant="body1">
        <Link
          className={`${classes.pointer} ${classes.link}`}
          href="https://github.com/lauphern"
          target="_blank"
          rel="noopener"
        >
          Github
        </Link>
      </Typography>
      <Typography variant="body1">
        <Link
          className={`${classes.pointer} ${classes.link}`}
          href={translations[lang].linkedin}
          target="_blank"
          rel="noopener"
        >
          Linkedin
        </Link>
      </Typography>
      {props.isItSmallTablet && (
        <Link href="#bottom-panel" className={`${classes.pointer} ${classes.expandMoreIcon}`}>
          <ExpandMoreIcon />
        </Link>
      )}
      <div className="leftPanel-bg"></div>
    </Grid>
  );
};

export default Bio;
