import React, { useState } from "react";
import {
  Box,
  CardMedia,
  Drawer,
  Hidden,
  IconButton,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { useResumeStyles } from "../../style/useStyles";

const Badge = props => {
  const resumeClasses = useResumeStyles();

  return (
    <Box className={resumeClasses.badgeContainer}>
      <CardMedia
        className={resumeClasses.badge}
        component="img"
        src="https://validator.swagger.io/validator?url=https://resume-api.vercel.app/definition.yaml"
        alt="Validation badge"
      ></CardMedia>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const DrawerList = props => {
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={props.value}
        onChange={props.handleChange}
        aria-label="Vertical tabs example"
        // className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
    </>
  );
};

const Docs = props => {
  const resumeClasses = useResumeStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const container = window !== undefined ? () => props.window().document.body : undefined;

  return (
    <>
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
          adios
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
          hola
          <DrawerList value={value} handleChange={handleChange} />
        </Drawer>
      </Hidden>
      </nav>
      <main className={resumeClasses.endpointsContainer}>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </main>
    </>
  );
};

export default Docs;
