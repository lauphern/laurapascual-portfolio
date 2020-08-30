import React from "react";
import { ButtonGroup, Button, Grid } from "@material-ui/core";

import { useLinksStyles } from "../../style/useStyles";


const Links = props => {
  const classes = useLinksStyles();

  return (
    <Grid
      item
      container
      xs={12}
      sm={6}
      className={`${classes.rightPanel} ${props.isItSmallTablet && classes.stacksMobile}`}
      alignContent="center"
      justify="flex-end"
      id="bottom-panel"
    >
      <ButtonGroup
        orientation="vertical"
        fullWidth
        className={`${props.isItTablet && classes.btnGroupMobile}`}
      >
        <Button
          variant="text"
          className={`${classes.btn} ${classes.pointer} ${
            props.isItSmallTablet && classes.btnMobile
          }`}
          href="https://cristina-escritora.vercel.app/"
          target="_blank"
        >
          Frontity site
        </Button>
        <Button
          variant="text"
          className={`${classes.btn} ${classes.pointer} ${
            props.isItSmallTablet && classes.btnMobile
          }`}
          href="https://time4time-demo.netlify.com/"
          target="_blank"
        >
          Time 4 Time 2.0
        </Button>
        <Button
          variant="text"
          className={`${classes.btn} ${classes.pointer} ${
            props.isItSmallTablet && classes.btnMobile
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
            props.isItSmallTablet && classes.btnMobile
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
  );
};

export default Links;
