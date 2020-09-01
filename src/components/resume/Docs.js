import React from "react";
import { Box, CardMedia } from "@material-ui/core";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import "./Docs.scss";
import { useResumeStyles } from "../../style/useStyles";

const Docs = props => {
  const resumeClasses = useResumeStyles();

  return (
    <Box>
    {/* TODO see if I can add this inside with dom manipulation and refs */}
      <CardMedia
        className={resumeClasses.badge}
        component="img"
        src="http://validator.swagger.io/validator?url=https://resume-api.vercel.app/definition.yaml"
        alt="Validation badge"
      ></CardMedia>
      <SwaggerUI
        url="https://resume-api.vercel.app/definition.yaml"
        validatorUrl="https://validator.swagger.io"
        defaultModelsExpandDepth={2}
      />
    </Box>
  );
};

export default Docs;
