export const handleSubmit = ({
  setOpen,
  clearPanelState,
  formValues,
  endpoint,
  getLanguage,
  setApiResponse,
  setApiError,
}) => {
  setOpen(true);
  clearPanelState({ clearForm: false });
  let params = { ...formValues };
  for (const key in params) {
    if (key === "Accept-Language") delete params[key];
    else if (params[key].length === 0) delete params[key];
  }
  import("./apiRequest").then(({ defaultServer, backupServer }) => {
    defaultServer
      .get(endpoint.path, {
        headers: { "Accept-Language": formValues["Accept-Language"] || getLanguage() },
        params,
      })
      .then(res => {
        // let test = response.value.match(/\n\s*\n/)
        import("./parseResponse").then(({ parseResponse }) => {
          const response = parseResponse({ res, endpoint });
          setApiResponse(response);
          setOpen(false);
        });
      })
      .catch(err => {
        return backupServer
          .get(endpoint.path, {
            headers: { "Accept-Language": formValues["Accept-Language"] || getLanguage() },
            params,
          })
          .then(res => {
            import("./parseResponse").then(({ parseResponse }) => {
              const response = parseResponse({ res, endpoint });
              setApiResponse(response);
              setOpen(false);
            });
          })
          .catch(err => {
            const errorObject = {
              code: err.response && err.response.status,
              description: err.response && err.response.statusText,
              mediaType: "application/json",
              value: `{\n  "code": "${err.response && err.response.status}",\n  "message": "${
                err.message
              }"\n}`,
            };
            if (
              err.response &&
              typeof err.response.data == "string" &&
              err.response.data.length > 0 &&
              err.response.data.indexOf("DOCTYPE") < 0
            )
              setApiError(err.response.data);
            else setApiError(err.message);
            setApiResponse(errorObject);
            setOpen(false);
          });
      });
  });
};

export const handlePdfDownload = ({
  setOpen,
  clearPanelState,
  endpoint,
  formValues,
  getLanguage,
  setApiResponse,
  setApiError,
}) => {
  setOpen(true);
  clearPanelState({ clearForm: false });

  import("./apiRequest").then(({ defaultServer, backupServer }) => {
    defaultServer
      .get(endpoint.path, {
        headers: {
          "Accept-Language": formValues["Accept-Language"] || getLanguage(),
          "Content-Type": "application/pdf",
        },
        responseType: "arraybuffer",
        timeout: 20000,
      })
      .then(res => {
        const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));
        let response = {...endpoint.responses.find(el => parseInt(el.code[0]) === res.status / 100)};
        response.url = url;
        setApiResponse(response);
        setOpen(false);
      })
      .catch(err => {
        return backupServer
          .get(endpoint.path, {
            headers: {
              "Accept-Language": formValues["Accept-Language"] || getLanguage(),
              "Content-Type": "application/pdf",
            },
            responseType: "arraybuffer",
            timeout: 20000,
          })
          .then(res => {
            const url = window.URL.createObjectURL(
              new Blob([res.data], { type: "application/pdf" })
            );
            let response = {...endpoint.responses.find(el => parseInt(el.code[0]) === res.status / 100)};
            response.url = url;
            setApiResponse(response);
            setOpen(false);
          })
          .catch(err => {
            const errorObject = {
              code: err.response && err.response.status,
              description: err.response && err.response.statusText,
              mediaType: "application/json",
              value: `{\n  "code": "${err.response && err.response.status}",\n  "message": "${
                err.message
              }"\n}`,
            };
            if (
              err.response &&
              typeof err.response.data == "string" &&
              err.response.data.length > 0 &&
              err.response.data.indexOf("DOCTYPE") < 0
            )
              setApiError(err.response.data);
            else setApiError(err.message);
            setApiResponse(errorObject);
            setOpen(false);
          });
      });
  });
};
