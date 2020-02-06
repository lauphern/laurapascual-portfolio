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
  Link
} from "@material-ui/core";
import "./App.scss";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        fontWeight: 300
      }
    }
  },
  typography: {
    // fontFamily: ["BioRhyme", "serif"].join(","),
    fontFamily: ["Source Code Pro", "monospace"].join(","),
    body1: {
      fontWeight: 300
    },
    h1: {
      fontFamily: ["Heebo", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
        ","
      ),
      fontWeight: 900
    }
  }
});

const useStyles = makeStyles(theme => ({
  mainContainer: {
    position: "absolute",
    pointerEvents: "none"
  },
  firstName: {
    textTransform: "uppercase"
  },
  btn: {
    "&:hover": {
      fontWeight: 400
    }
  },
  pointer: {
    pointerEvents: "all"
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
        <Container className={classes.mainContainer}>
          <Typography variant="h1">
            <span className={classes.firstName}>Laura</span> Pascual
          </Typography>
          <Typography variant="body1">Little intro.</Typography>
          <Typography variant="body1">
            Looking for jobs as a freelance:{" "}
            <Link
              className={classes.pointer}
              href="mailto:laura.pascual.h@hotmail.com"
            >
              email
            </Link>{" "}
          </Typography>
          <Typography variant="body1">
            <Link
              className={classes.pointer}
              href="https://github.com/lauphern"
              target="_blank"
              rel="noopener"
            >
              Github
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              className={classes.pointer}
              href="https://www.linkedin.com/in/laura-pascual-hernandez/?locale=en_US"
              target="_blank"
              rel="noopener"
            >
              Linkedin
            </Link>
          </Typography>
          <ButtonGroup>
            <Button variant="text" className={`${classes.btn} ${classes.pointer}`}>
              Textures - MaterialUI demo
            </Button>
            <Button variant="text" className={`${classes.btn} ${classes.pointer}`}>
              SVG animations
            </Button>
            <Button variant="text" className={`${classes.btn} ${classes.pointer}`}>
              Three.js demo
            </Button>
            <Button variant="text" className={`${classes.btn} ${classes.pointer}`}>
              App
            </Button>
          </ButtonGroup>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
