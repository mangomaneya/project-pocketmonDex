import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer,Flip } from "react-toastify";
import styled from "styled-components";
import GlobalStyles from "../style/GlobalStyles";
import Layout from "./Layout";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Details from "../pages/Details";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="app-container">
        <Layout>
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
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dex" element={<Dex />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
};
export default Router;
const StyledToastContainer = styled(ToastContainer)`
  --toastify-toast-width: 420px;
  --toastify-font-family: "Galmuri7";
`;
