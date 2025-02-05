import { useLocation, useNavigate } from "react-router-dom";
import { CardBtn } from "../components/PokemonCard";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pokemon } = location.state || {};
  const { id, korean_name, img_url, description } = pokemon;
  console.log("pokemon", pokemon);
  return (
    <div>
      <p>{korean_name}</p>
      <img src={img_url}></img>
      {/* id값의 크기에 따라(id<10/id<100) NO.+${id} */}
      <p>{id < 10 ? `No.00${id}` : id < 100 ? `No.0${id}` : `N.0${id}`}</p>
      <p>{description}</p>
      <CardBtn
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </CardBtn>
      <CardBtn>추가하기</CardBtn>
    </div>
  );
};

export default Details;
