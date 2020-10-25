import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Container, Typography } from "@material-ui/core";
import ErrorSharpIcon from "@material-ui/icons/ErrorSharp";


class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {

    const { t } = this.props;

    if (this.state.hasError) {
      return (
        <Container id="default-error-page">
          <Typography variant="h3">
            <ErrorSharpIcon fontSize="inherit" />
          </Typography>
          <Typography variant="h3">{t("defaultError")}</Typography>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
