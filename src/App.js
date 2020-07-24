import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Container, Typography, ButtonGroup, Button, Link, Grid, Chip } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./App.scss";

import { theme } from "./style/theme";
import { useStyles } from "./style/useStyles";
import { _cursorEffect } from "./utils/cursorEffect";
import { translations } from "./data/translations";

function App() {
  const [lang, setLang] = useState("es");
  const classes = useStyles();

  const isItSmallDevice = useMediaQuery("(max-width:320px)");
  const isItSmallTablet = useMediaQuery("(max-width:834px)");
  const isItTablet = useMediaQuery("(max-width:1100px)");
  const isItSmallerThanLaptop = useMediaQuery("(max-width:1199px)");

  useEffect(() => {
    if (!isItSmallerThanLaptop)
      document.querySelector(".hover-container").addEventListener("mousemove", _cursorEffect);
    else document.querySelector(".hover-container").removeEventListener("mousemove", _cursorEffect);
  });

  return (
    <div className="App">
      <div className="hover-container"></div>
      <ThemeProvider theme={theme}>
        <Container className={`${classes.mainContainer} ${classes.layout}`} disableGutters>
          <Grid className={classes.layout} container alignContent="center" justify="space-between">
            <Grid
              item
              xs={12}
              sm={6}
              className={`${classes.leftPanel} ${isItSmallTablet && classes.stacksMobile}`}
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
              <Typography variant="h1" className={isItSmallDevice && classes.h1Mobile}>
                <span className={classes.firstName}>Laura</span>
                <br />
                Pascual
              </Typography>
              <Typography variant="h2" className={isItSmallDevice && classes.h2Mobile}>
                {translations[lang].subtitle}
              </Typography>
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
              {isItSmallTablet && (
                <Link
                  href="#bottom-panel"
                  className={`${classes.pointer} ${classes.expandMoreIcon}`}
                >
                  <ExpandMoreIcon />
                </Link>
              )}
              <div className="leftPanel-bg"></div>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={6}
              className={isItSmallTablet && classes.stacksMobile}
              alignContent="center"
              justify="flex-end"
              id="bottom-panel"
            >
              <ButtonGroup
                orientation="vertical"
                fullWidth
                className={`${isItTablet && classes.btnGroupMobile}`}
              >
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer} ${
                    isItSmallTablet && classes.btnMobile
                  }`}
                  href="https://cristina-escritora.vercel.app/"
                  target="_blank"
                >
                  Frontity site
                </Button>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer} ${
                    isItSmallTablet && classes.btnMobile
                  }`}
                  href="https://time4time-demo.netlify.com/"
                  target="_blank"
                >
                  Time 4 Time 2.0
                </Button>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer} ${
                    isItSmallTablet && classes.btnMobile
                  }`}
                  href="https://textures-muidemo.netlify.com/"
                  target="_blank"
                >
                  Textures -&nbsp;
                  <span className={classes.capitalize}>Material-UI demo</span>
                </Button>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer} ${
                    isItSmallTablet && classes.btnMobile
                  }`}
                  href="https://svg-css-animations.netlify.com/"
                  target="_blank"
                >
                  SVG & CSS animations
                </Button>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer}`}
                  href="https://where-is-home.netlify.com/"
                  target="_blank"
                >
                  Three.js&nbsp;<span className={classes.capitalize}>demo</span>
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
