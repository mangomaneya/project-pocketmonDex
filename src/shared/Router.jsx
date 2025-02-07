import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Details from "../pages/Details";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dex" element={<Dex />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
