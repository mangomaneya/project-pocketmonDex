import { Provider } from "react-redux";
import Router from "./shared/Router";
import GlobalStyles from "./style/GlobalStyles";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
        <GlobalStyles />
        <div className="app-container">
          <Router />
        </div>
    </Provider>
  );
}

export default App;
