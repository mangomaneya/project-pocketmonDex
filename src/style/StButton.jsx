import styled from "styled-components";

const StButton = styled.button`
font-family: "Galmuri7";
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$checked ? "rgb(35,35,35)" : "rgb(255, 0, 0)"};
  color: white;
  border: none;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${(props) =>
    props.$checked ? "rgb(109, 109, 109)" : "rgb(125, 0, 0)"};
  }
`;

export default StButton;
