import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Store } from "../../store";
import { Box, CardMedia, Drawer, Hidden, IconButton, Typography, Chip } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import DrawerList from "./DrawerList";
import Panel from "./Panel";

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
  const { t, i18n } = useTranslation();

  const { endpoints } = useContext(Store);

  const resumeClasses = useResumeStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <Box className={resumeClasses.resumeTitle}>
        <Typography variant="h3">Résumé API</Typography>
        <Chip size="small" label="v1.0" />
        <Chip size="small" label="OAS3" />
        <Badge />
      </Box>
      <Typography variant="h4">{t("docsSubtitle")}</Typography>
      <Typography variant="body1">
        {t("docsDescription", { returnObjects: true }).map(el => {
          if (el.indexOf("OpenAPI") > 0)
            return (
              <a href="https://resume-api.vercel.app/definition.yaml" target="_blank" rel="noopener noreferrer">
                {el}
              </a>
            );
          else return el;
        })}
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
              <DrawerList value={activeTab} handleChange={handleChange} />
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
              <DrawerList value={activeTab} handleChange={handleChange} />
            </Drawer>
          </Hidden>
        </nav>
        <main className={resumeClasses.endpointsContainer}>
          {endpoints.map((endpoint, i) => (
            <Panel value={activeTab} index={i} endpoint={endpoint} />
          ))}
        </main>
      </Box>
    </>
  );
};

export default Docs;
