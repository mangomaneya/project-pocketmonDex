import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Dex from "../components/Dex";
import Details from "../components/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dex" element={<Dex />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
