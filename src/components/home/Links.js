import React, { useContext } from "react";
import { Store } from "../../store";
import { ButtonGroup, Button, Grid, Tooltip, Chip } from "@material-ui/core";

import { useTransition, animated } from "react-spring";

import { useLinksStyles } from "../../style/useStyles";

const Links = props => {
  const linkClasses = useLinksStyles();

  const {
    projects,
    mediaQueries: { isItSmallDevice, isItSmallTablet, isItTablet },
  } = useContext(Store);

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
                {projects.map(project => (
                  <Tooltip title={project.framework} arrow>
                    <Button
                      variant="text"
                      className={`${linkClasses.btn}`}
                      href={project.url}
                      target="_blank"
                    >
                      {project.title}&nbsp;<Chip label={`${project.date}${(!isItSmallDevice && project.contest) ? project.contest : ""}`} variant="outlined" size="small" />
                    </Button>
                  </Tooltip>
                ))}
              </ButtonGroup>
            </animated.div>
          )
      )}
    </Grid>
  );
};

export default Links;
