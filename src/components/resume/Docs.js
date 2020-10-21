import React, { useState, useContext } from "react";
import { Store } from "../../store";
import {
  Box,
  CardMedia,
  Drawer,
  Hidden,
  IconButton,
  Tabs,
  Tab,
  Typography,
  Chip,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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

const DrawerList = props => {
  const { endpoints } = useContext(Store);

  const a11yProps = index => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

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
        {endpoints.map((endpoint, i) => (
          <Tab label={endpoint.title} {...a11yProps(i)} />
        ))}
      </Tabs>
    </>
  );
};

const TabPanel = props => {
  const { endpoint, value, index, ...other } = props;

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
          <Typography variant="h5">
            {endpoint.title} <Chip size="small" label={endpoint.method} />
          </Typography>
          <Typography variant="subtitle1">{endpoint.description}</Typography>
          <TableContainer component={Paper}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Parameters
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell colSpan={2}>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Name of param</TableCell>
                  <TableCell colSpan={2}>This is the description</TableCell>
                </TableRow>
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Responses
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Code</TableCell>
                  <TableCell colSpan={2}>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {endpoint.responses.map(response => (
                  <>
                    <TableRow key={response.code}>
                      <TableCell rowSpan={4}>{response.code}</TableCell>
                      <TableCell>{response.description}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Media type: {response.mediaType}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Example value:</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <code>{response.exampleValue}</code>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </div>
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

  // const container = window !== undefined ? () => props.window().document.body : undefined;

  return (
    <>
      <Box className={resumeClasses.resumeTitle}>
        <Typography variant="h3">Resume API</Typography>
        <Chip size="small" label="v1.0" />
        <Chip size="small" label="OAS3" />
        <Badge />
      </Box>
      <Typography variant="h4">
        Read my résumé in JSON format and download the data in a pdf file
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
