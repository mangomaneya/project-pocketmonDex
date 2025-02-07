import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <StLayout>
      {/* 현재페이지 경로가 "/" 이면 img를 안보여주기 */}
      {location.pathname !== "/" && (
        <Link to={"/"}>
          <img
            src="/src/assets/pokemonLogo.png"
            alt="Pokemon Logo"
            id="pokemon-logo"
          ></img>
        </Link>
      )}
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
