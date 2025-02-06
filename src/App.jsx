import { Provider } from "react-redux";
import Router from "./shared/Router";
import GlobalStyles from "./style/GlobalStyles";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { Flip } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div className="app-container">
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
          transition={Flip}
        />
        <Router />
      </div>
    </Provider>
  );
}

export default App;
