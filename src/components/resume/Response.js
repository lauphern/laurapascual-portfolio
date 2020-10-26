import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { TableRow, TableCell, CircularProgress } from "@material-ui/core";

import { useResumeStyles } from "../../style/useStyles";

const Pdf = React.lazy(() => import("./Pdf"));

const Response = props => {
  const { response } = props;

  const { t } = useTranslation();

  const resumeClasses = useResumeStyles();

  return (
    <>
      <TableRow key={response.code}>
        <TableCell rowSpan={4}>{response.code}</TableCell>
        <TableCell>{response.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>{`${t("requestTable.mediaType")} ${response.mediaType}`}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>{t("requestTable.value")}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={resumeClasses.responseCell}>
          {response.url ? (
            <Suspense fallback={<CircularProgress />}>
              <Pdf url={response.url} />
            </Suspense>
          ) : (
            <code>{response.value}</code>
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

export default Response;
