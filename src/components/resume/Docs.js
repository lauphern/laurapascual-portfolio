import React, { useState, useContext } from "react";
import { Store } from "../../store";
import { Box, CardMedia, Drawer, Hidden, IconButton, Typography, Chip } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import DrawerList from "./DrawerList";
import TabPanel from "./TabPanel";

import { useResumeStyles } from "../../style/useStyles";

const Badge = props => {
  const resumeClasses = useResumeStyles();

  return (
    <CardMedia
      className={resumeClasses.badge}
      component="img"
      src="https://validator.swagger.io/validator?url=https://resume-api.vercel.app/definition.yaml"
      alt="Validation badge"
    ></CardMedia>
  );
};

const Docs = props => {
  const { endpoints } = useContext(Store);

  const resumeClasses = useResumeStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className={resumeClasses.resumeTitle}>
        {/* TODO translate */}
        <Typography variant="h3">Resume API</Typography>
        <Chip size="small" label="v1.0" />
        <Chip size="small" label="OAS3" />
        <Badge />
      </Box>
      <Typography variant="h4">
        Read my résumé in JSON format and download the data in a pdf file
      </Typography>
      <Typography variant="body1">
        I created a REST API to show my résumé in JSON format. Why? It was a good excuse to learn
        API development and it makes it easier to share my résumé.
      </Typography>
      <Box className={resumeClasses.docsContainer}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={resumeClasses.showDrawerBtn}
        >
          <MenuIcon />
        </IconButton>
        <nav className={resumeClasses.drawerContainer}>
          <Hidden smUp>
            <Drawer
              // container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: resumeClasses.drawerPaperMobile,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <DrawerList value={value} handleChange={handleChange} />
            </Drawer>
          </Hidden>
          <Hidden xsDown>
            <Drawer
              classes={{
                paper: resumeClasses.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <DrawerList value={value} handleChange={handleChange} />
            </Drawer>
          </Hidden>
        </nav>
        <main className={resumeClasses.endpointsContainer}>
          {endpoints.map((endpoint, i) => (
            <TabPanel value={value} index={i} endpoint={endpoint} />
          ))}
        </main>
      </Box>
    </>
  );
};

export default Docs;
