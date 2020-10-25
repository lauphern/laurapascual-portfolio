import React, { useState, useEffect, Suspense, useRef, useContext } from "react";
import { Store } from "./store";
import { Switch, Route, useLocation } from "react-router-dom";
import { Fab } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CodeSharpIcon from "@material-ui/icons/CodeSharp";
import "./App.scss";

import LanguageSwitch from "./components/LanguageSwitch";
import ErrorBoundary from "./pages/ErrorBoundary";

import { theme } from "./style/theme";

import { useAppStyles } from "./style/useStyles";

const Home = React.lazy(() => import("./pages/Home"));
const Resume = React.lazy(() => import("./pages/Resume"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));

//TODO remove unused variables

const NumericalLoader = props => {
  //TODO the value doesn't change when you switch between routes
  //it might be because of useEffect in Home and Resume
  const appClasses = useAppStyles();

  const {
    mediaQueries: { isItSmallTablet },
  } = useContext(Store);

  const { num } = props;
  return (
    <div
      className={`${appClasses.numericalLoader} ${
        isItSmallTablet && appClasses.numericalLoaderMobile
      }`}
    >
      <p>
        <span>{num}</span>%
      </p>
    </div>
  );
};

function App() {
  const location = useLocation();

  const appClasses = useAppStyles();

  const [loaderNumber, setLoaderNumber] = useState(0);
  let counterRef = useRef();

  useEffect(() => {
    import("./utils/showMessage").then(({ _showMessage }) => _showMessage());
  }, [location]);

  useEffect(() => {
    counterRef.current = setInterval(() => {
      setLoaderNumber(loaderNumber => (loaderNumber += 2));
      if (loaderNumber >= 100) {
        setLoaderNumber(0);
        return clearInterval(counterRef.current);
      }
    }, 100);
    return () => {
      setLoaderNumber(0);
      clearInterval(counterRef.current);
    };
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<NumericalLoader num={loaderNumber} />}>
          <ThemeProvider theme={theme}>
            <LanguageSwitch />
            <Switch>
              <Route exact path="/">
                <Home setLoaderNumber={setLoaderNumber} counterRef={counterRef} />
              </Route>
              <Route path="/resume">
                <Resume setLoaderNumber={setLoaderNumber} counterRef={counterRef} />
              </Route>
              <Route path="*">
                <NoMatch setLoaderNumber={setLoaderNumber} counterRef={counterRef} />
              </Route>
            </Switch>
            <Fab
              variant="extended"
              size="medium"
              href="https://github.com/users/lauphern/projects/2"
              className={`${appClasses.sourceCodeBtn} ${appClasses.routerBtn}`}
              target="_blank"
              rel="noopener"
            >
              <CodeSharpIcon fontSize="small" />
              &nbsp;
              <span>
                Source
                <br />
                code
              </span>
            </Fab>
          </ThemeProvider>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
