import styled from "styled-components";

const StButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  color: white;
  border: none;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgb(204, 0, 0);
  }
`;

export default StButton;
