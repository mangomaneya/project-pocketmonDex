import styled from "styled-components";
import StButton from "../style/StButton";
import { useNavigate } from "react-router-dom";

export const PokeCard = styled.div`
  color: black;
  background-color: #ffffff;
  /* border : 1px solid black; */
  border-radius: 8px;
  width: 160px;
  height: auto;
  padding: 22px 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  transition: all ease-in-out 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
  .hide {
    display: none;
  }
`;
export const CardBtn = styled(StButton)`
  width: fit-content;
  padding: 10px 18px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  color: #ffffff;
`;

const PokemonCard = ({ getOutMyPoke, addInMyPoke, pokemon, btnName }) => {
  const { id, korean_name, img_url, description, types } = pokemon;
  console.log("addInMyPoke", addInMyPoke);
  const navigate = useNavigate();
  const navigateToDetail = (e) => {
    if (e.target.tagName === "BUTTON") {
      // console.log("클릭한 것은 ", e.target);
      e.stopPropagation(); //이벤트가 부모요소로 전달되지 않도록 차단
      return;
    }
    navigate(
      `/details/value?id=${id}&name=${korean_name}&img=${img_url}&desc=${description}&types=${types}`
    );
  };

  return (
    <>
      <PokeCard key={id} onClick={(event) => navigateToDetail(event)} id={id}>
        <p>{korean_name}</p>
        <img src={img_url}></img>
        <p>{id < 10 ? `No.00${id}` : id < 100 ? `No.0${id}` : `N.0${id}`}</p>
        <p className="hide">{description}</p>
        {btnName === "추가" ? (
          <CardBtn onClick={() => addInMyPoke(pokemon)}>{btnName}</CardBtn>
        ) : (
          <CardBtn onClick={() => getOutMyPoke(pokemon)}>{btnName}</CardBtn>
        )}
      </PokeCard>
    </>
  );
};

export default PokemonCard;
