import { Fragment } from "react";
import Router from "./shared/Router";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router />
    </Fragment>
  );
}

export default App;
