import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <div id="pokemon-logo"></div>
      {children}
    </>
  );
};

export default Layout;
export const StLayout = styled(Layout)`
background-color: aliceblue;
  #pokemon-logo {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    background-color: red;
  }
`;
