import Router from "./shared/Router";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="app-container">
        <Router />
      </div>
    </>
  );
}

export default App;
