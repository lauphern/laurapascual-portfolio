import React, { useContext } from "react";
import { Store } from "../../store";
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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DescriptionSharpIcon from "@material-ui/icons/DescriptionSharp";
import { useTranslation } from "react-i18next";
import { useTransition, animated } from "react-spring";

import Header from "../Header";

import { useBioStyles, useAppStyles } from "../../style/useStyles";

// import { hardSkills } from "../../data/hardSkills";

const Bio = props => {

  const { hardSkills } = useContext(Store);

  const { t, i18n } = useTranslation();

  const bioClasses = useBioStyles();
  const appClasses = useAppStyles();

  const isItSmallTablet = useMediaQuery("(max-width:834px)");

  const leftPanelTransition = useTransition(true, null, {
    unique: true,
    reset: true,
    from: { transform: "translate3d(-500px,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(-500px,0,0)", opacity: 0 },
  });

  return (
    <Grid
      item
      xs={12}
      sm={6}
      className={`${bioClasses.leftPanel} ${isItSmallTablet && bioClasses.stacksMobile} ${isItSmallTablet && bioClasses.stickyPanelMobile}`}
      container
      justify="center"
    >
      {leftPanelTransition.map(
        ({ item, props, key }) =>
          item && (
            <animated.div key={key} style={props}>
              <>
                <Header />
                <Container className={bioClasses.socialContainer} disableGutters>
                  <Tooltip title={t("cvTooltip")} arrow>
                    <Button
                      variant="outlined"
                      className={`${appClasses.pointer} ${appClasses.routerBtn}`}
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
                      className={`${appClasses.pointer} ${appClasses.link}`}
                      href="mailto:laura.pascual.h@hotmail.com"
                    >
                      Email
                    </Link>{" "}
                  </Typography>
                  <Divider orientation="vertical" flexItem className={bioClasses.verticalDivider} />
                  <Typography variant="body1">
                    <Link
                      className={`${appClasses.pointer} ${appClasses.link}`}
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
                      className={`${appClasses.pointer} ${appClasses.link}`}
                      href={t("linkedin")}
                      target="_blank"
                      rel="noopener"
                    >
                      Linkedin
                    </Link>
                  </Typography>
                </Container>
                <Box className={bioClasses.skillsContainer}>
                  {/* TODO solucionar esto en mobile, es mucho contenido */}
                  {hardSkills.map(skillName => (
                    <Chip
                      label={skillName}
                      size="small"
                      className={`${bioClasses.hardSkill} ${appClasses.pointer}`}
                    />
                  ))}
                </Box>
              </>
            </animated.div>
          )
      )}
    </Grid>
  );
};

export default Bio;
