import React, { useContext } from "react";
import { Store } from "../../store";
import { Tabs, Tab } from "@material-ui/core";

import { useResumeStyles } from "../../style/useStyles";

const DrawerList = props => {
  const { endpoints } = useContext(Store);

  const resumeClasses = useResumeStyles();

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
        aria-label="Vertical tabs"
        classes={{ flexContainerVertical: resumeClasses.tabs }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--accent)",
            width: "4px",
          },
        }}
      >
        {endpoints.map((endpoint, i) => (
          <Tab label={endpoint.title} {...a11yProps(i)} />
        ))}
      </Tabs>
    </>
  );
};

export default DrawerList;
