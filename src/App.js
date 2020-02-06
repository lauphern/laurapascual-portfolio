import React, { useEffect } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from "@material-ui/core/styles";
import {
  Container,
  Typography,
  ButtonGroup,
  Button,
  Link,
  Grid,
  Tooltip,
  Fade
} from "@material-ui/core";
import "./App.scss";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        fontWeight: 300,
        fontSize: "2rem"
      }
    }
  },
  typography: {
    // fontFamily: ["BioRhyme", "serif"].join(","),
    fontFamily: ["Source Code Pro", "monospace"].join(","),
    body1: {
      fontWeight: 400,
      // lineHeight: "2.5rem"
    },
    h1: {
      fontFamily: ["Heebo", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
        ","
      ),
      fontWeight: 900,
      fontSize: "4rem",
      letterSpacing: "-0.08rem",
      lineHeight: "6rem",
      marginBottom: "6rem"
    },
    h2: {
      fontSize: "2rem"
    }
  }
});

const useStyles = makeStyles(theme => ({
  layout: {
    height: "100vh",
    width: "100vw"
  },
  mainContainer: {
    position: "absolute",
    pointerEvents: "none"
  },
  leftPanel: {
    // zIndex: -2,
    // background: "#bbc4c7",
    color: "white",
    height: "100vh",
    position: "relative",
    padding: "0 5vw",
    top: 0,
    left: 0,
    flexDirection: "column"
  },
  firstName: {
    textTransform: "uppercase",
    letterSpacing: "0.18rem"
  },
  link: {
    transition: "0.1s",
    color: "#b5f9ff",

    "&:hover": {
      color: "yellow"
    }
  },
  btn: {
    transition: "0.1s",

    "&:hover": {
      fontWeight: 400,
      lineHeight: 3
    }
  },
  btnDisabled: {
    color: "#878787"
  },
  capitalize: {
    textTransform: "none"
  },
  pointer: {
    pointerEvents: "all",
    zIndex: 100,
    position: "relative"
  }
}));

// '&:hover'

function cursorEffect() {
  document.querySelector(".hover-container").onmousemove = e => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  };
}

function App() {
  const classes = useStyles();
  useEffect(() => {
    cursorEffect();
  });
  return (
    <div className="App">
      <div className="hover-container"></div>
      <ThemeProvider theme={theme}>
        <Container className={`${classes.mainContainer} ${classes.layout}`} disableGutters>
          <Grid
            className={classes.layout}
            container
            alignContent="center"
            justify="space-between"
          >
            <Grid item xs={12} sm={6} className={classes.leftPanel} container justify="center">
              <Typography variant="h1">
                <span className={classes.firstName}>Laura</span>
                <br />
                Pascual
              </Typography>
              <Typography variant="h2">Full-stack developer with a focus on front-end.</Typography>
              <Typography variant="body1">
                Currently looking for freelance jobs:&nbsp;
                <Link
                  className={`${classes.pointer} ${classes.link}`}
                  href="mailto:laura.pascual.h@hotmail.com"
                >
                  email
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
                  href="https://www.linkedin.com/in/laura-pascual-hernandez/?locale=en_US"
                  target="_blank"
                  rel="noopener"
                >
                  Linkedin
                </Link>
              </Typography>
              <div className="leftPanel-bg"></div>
            </Grid>
            <Grid item container xs={12} sm={6} alignContent="center" justify="flex-end">
              <ButtonGroup orientation="vertical" fullWidth>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer}`}
                >
                  Textures -&nbsp;<span className={classes.capitalize}>Material-UI demo</span>
                </Button>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer}`}
                >
                  SVG animations
                </Button>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer}`}
                >
                  Three.js&nbsp;<span className={classes.capitalize}>demo</span>
                </Button>
                <Tooltip
                  title="#TBA"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  arrow
                >
                  {/* TODO create disabled class */}
                  <Button
                    variant="text"
                    className={`${classes.btn} ${classes.pointer} ${classes.btnDisabled}`}
                  >
                    React Native App
                  </Button>
                </Tooltip>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
