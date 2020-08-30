import React from "react";
import { ButtonGroup, Button, Grid, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useTransition, animated } from "react-spring";

import { useAppStyles, useLinksStyles } from "../../style/useStyles";

const Links = props => {
  const linkClasses = useLinksStyles();
  const appClasses = useAppStyles();

  const isItSmallDevice = useMediaQuery("(max-width:400px)");
  const isItSmallTablet = useMediaQuery("(max-width:834px)");
  const isItTablet = useMediaQuery("(max-width:1100px)");

  const rightPanelTransition = useTransition(true, null, {
    unique: true,
    reset: true,
    from: { transform: "translate3d(500px,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(500px,0,0)", opacity: 0 },
  });

  return (
    <Grid
      item
      container
      xs={12}
      sm={6}
      className={`${linkClasses.rightPanel} ${isItSmallTablet && linkClasses.stacksMobile} ${
        isItSmallTablet && linkClasses.topPanelMobile
      }`}
      alignContent="center"
      justify="center"
      id="bottom-panel"
    >
      {rightPanelTransition.map(
        ({ item, props, key }) =>
          item && (
            <animated.div key={key} style={props}>
              <ButtonGroup
                orientation="vertical"
                fullWidth
                className={`${isItSmallDevice && linkClasses.btnGroupMobile} ${
                  isItTablet && !isItSmallDevice && linkClasses.btnGroupTablet
                } `}
              >
                <Button
                  variant="text"
                  className={`${linkClasses.btn} ${appClasses.pointer}`}
                  href="https://cristina-escritora.vercel.app/"
                  target="_blank"
                >
                  Frontity site
                </Button>
                <Button
                  variant="text"
                  className={`${linkClasses.btn} ${appClasses.pointer}`}
                  href="https://time4time-demo.netlify.com/"
                  target="_blank"
                >
                  Time 4 Time 2.0
                </Button>
                <Button
                  variant="text"
                  className={`${linkClasses.btn} ${appClasses.pointer}`}
                  href="https://textures-muidemo.netlify.com/"
                  target="_blank"
                >
                  Textures -&nbsp;
                  <span className={linkClasses.capitalize}>Material-UI demo</span>
                </Button>
                <Button
                  variant="text"
                  className={`${linkClasses.btn} ${appClasses.pointer}`}
                  href="https://svg-css-animations.netlify.com/"
                  target="_blank"
                >
                  SVG & CSS animations
                </Button>
                <Button
                  variant="text"
                  className={`${linkClasses.btn} ${appClasses.pointer}`}
                  href="https://where-is-home.netlify.com/"
                  target="_blank"
                >
                  Three.js&nbsp;<span className={linkClasses.capitalize}>demo</span>
                </Button>
              </ButtonGroup>
            </animated.div>
          )
      )}
      <Box className={linkClasses.rightPanelBg} />
    </Grid>
  );
};

export default Links;
