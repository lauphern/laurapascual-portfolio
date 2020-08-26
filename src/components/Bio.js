import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  ButtonGroup,
  Button,
  Link,
  Grid,
  Chip,
  Box,
  Tooltip,
  Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DescriptionSharpIcon from "@material-ui/icons/DescriptionSharp";

import { useAppStyles } from "../style/useStyles";
import { useBioStyles } from "../style/useStyles";

import { translations } from "../data/translations";
import { hardSkills } from "../data/hardSkills";

const Bio = props => {
  const [lang, setLang] = useState("es");
  const bioClasses = useBioStyles();
  const appClasses = useAppStyles();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      className={`${bioClasses.leftPanel} ${props.isItSmallTablet && bioClasses.stacksMobile}`}
      container
      justify="center"
    >
      <ButtonGroup variant="text" size="small" className={bioClasses.languageSwitch}>
        <Button
          onClick={() => setLang("en")}
          className={`${bioClasses.pointer} ${bioClasses.link} ${bioClasses.languageBtn} ${
            lang === "en" && bioClasses.languageBtnActive
          }`}
        >
          EN
        </Button>
        <Button
          onClick={() => setLang("es")}
          className={`${bioClasses.pointer} ${bioClasses.link} ${bioClasses.languageBtn} ${
            lang === "es" && bioClasses.languageBtnActive
          }`}
        >
          ES
        </Button>
      </ButtonGroup>
      <Typography variant="h1" className={props.isItSmallDevice && bioClasses.h1Mobile}>
        <span className={bioClasses.firstName}>Laura</span>
        <br />
        Pascual
      </Typography>
      <Typography variant="h2" className={props.isItSmallDevice && bioClasses.h2Mobile}>
        {translations[lang].subtitle}
      </Typography>
      {/* <Divider variant="fullWidth" className={bioClasses.horizontalDivider} /> */}
      <Container className={bioClasses.socialContainer} disableGutters>
        <Tooltip title={translations[lang].cvTooltip} arrow>
          <Button
            variant="outlined"
            className={`${bioClasses.pointer} ${appClasses.routerBtn}`}
            component={RouterLink}
            to="/resume"
            size="small"
          >
            <DescriptionSharpIcon /> {translations[lang].cv}
          </Button>
        </Tooltip>
        <Divider orientation="vertical" flexItem className={bioClasses.verticalDivider}/>
        <Typography variant="body1">
          <Link
            className={`${bioClasses.pointer} ${bioClasses.link}`}
            href="mailto:laura.pascual.h@hotmail.com"
          >
            Email
          </Link>{" "}
        </Typography>
        <Divider orientation="vertical" flexItem className={bioClasses.verticalDivider}/>
        <Typography variant="body1">
          <Link
            className={`${bioClasses.pointer} ${bioClasses.link}`}
            href="https://github.com/lauphern"
            target="_blank"
            rel="noopener"
          >
            Github
          </Link>
        </Typography>
        <Divider orientation="vertical" flexItem className={bioClasses.verticalDivider}/>
        <Typography variant="body1">
          <Link
            className={`${bioClasses.pointer} ${bioClasses.link}`}
            href={translations[lang].linkedin}
            target="_blank"
            rel="noopener"
          >
            Linkedin
          </Link>
        </Typography>
      </Container>
      {/* <Divider variant="fullWidth" className={bioClasses.horizontalDivider} /> */}
      <Box className={bioClasses.skillsContainer}>
        {hardSkills.map(skillName => (
          <Chip
            label={skillName}
            size="small"
            className={`${bioClasses.hardSkill} ${bioClasses.link} ${bioClasses.pointer}`}
          />
        ))}
      </Box>
      {props.isItSmallTablet && (
        <Link href="#bottom-panel" className={`${bioClasses.pointer} ${bioClasses.expandMoreIcon}`}>
          <ExpandMoreIcon />
        </Link>
      )}
      <div className="leftPanel-bg"></div>
    </Grid>
  );
};

export default Bio;
