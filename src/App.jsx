import { Provider } from "react-redux";
import Router from "./shared/Router";
import { store } from "./redux/store";
import "galmuri/dist/galmuri.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
