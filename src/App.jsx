import { Provider } from "react-redux";
import Router from "./shared/Router";
import GlobalStyles from "./style/GlobalStyles";
import { store } from "./redux/store";
import { ToastContainer, Flip } from "react-toastify";
import "galmuri/dist/galmuri.css";
import './App.css'
import styled from "styled-components";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div className="app-container">
        <StyledToastContainer
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
const StyledToastContainer = styled(ToastContainer)`
  --toastify-toast-width: 420px;
`