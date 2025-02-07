import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ children }) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  return (
    <StLayout>
      {/* 현재페이지 경로가 "/" 이면 img를 안보여주기... location? */}
      {/* <Link to={"/"}> */}
        <img
          src="/src/assets/pokemon-logo.png"
          alt="Pokemon Logo"
          id="pokemon-logo"
        ></img>
      {/* </Link> */}
      {children}
    </StLayout>
  );
};

export default Layout;
const StLayout = styled.div`
  #pokemon-logo {
    position: absolute;
    left: 36px;
    top: 32px;
    width: 160px;
    @media (max-width: 1742px) {
      position: inherit;
    }
  }
`;
