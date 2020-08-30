import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
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
import { useTranslation } from 'react-i18next';

import LanguageSwitch from "../LanguageSwitch";
import Header from "../Header";

import { useAppStyles } from "../../style/useStyles";
import { useBioStyles } from "../../style/useStyles";

import { hardSkills } from "../../data/hardSkills";

const Bio = props => {

  const { t, i18n } = useTranslation();

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
      <LanguageSwitch />
      <Header />
      <Container className={bioClasses.socialContainer} disableGutters>
        <Tooltip title={t("cvTooltip")} arrow>
          <Button
            variant="outlined"
            className={`${bioClasses.pointer} ${appClasses.routerBtn}`}
            component={RouterLink}
            to="/resume"
            size="small"
          >
            <DescriptionSharpIcon /> {t("cv")}
          </Button>
        </Tooltip>
        <Divider orientation="vertical" flexItem className={bioClasses.verticalDivider} />
        <Typography variant="body1">
          {/* TODO revisar que funciona */}
          <Link
            className={`${bioClasses.pointer} ${bioClasses.link}`}
            href="mailto:laura.pascual.h@hotmail.com"
          >
            Email
          </Link>{" "}
        </Typography>
        <Divider orientation="vertical" flexItem className={bioClasses.verticalDivider} />
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
        <Divider orientation="vertical" flexItem className={bioClasses.verticalDivider} />
        <Typography variant="body1">
          <Link
            className={`${bioClasses.pointer} ${bioClasses.link}`}
            href={t("linkedin")}
            target="_blank"
            rel="noopener"
          >
            Linkedin
          </Link>
        </Typography>
      </Container>
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
    </Grid>
  );
};

export default Bio;
