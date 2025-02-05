import { useLocation, useNavigate } from "react-router-dom";
import { CardBtn } from "../components/PokemonCard";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { pokemon } = location.state || {};
  // const { id, korean_name, img_url, description } = pokemon;
  // console.log("pokemon", pokemon); //state 사용 시

  //✅ 1. useLocation으로 현재 위치를 변수에 할당하고 / const location = useLocation()
  //✅ 2. location의 쿼리스트링을 파싱 / const queryParams = new URLSearchParams(location.search)
  //✅ 3. 파싱한 데이터에서 필요한 데이터값을 추출 / const id = queryParams.get("id")
  // (선택사항) 쿼리 숨기기 (window.history.replaceState({},null, location.pathname)
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get("id");
  const name = queryParams.get("name");
  const img = queryParams.get("img");
  const desc = queryParams.get("desc");

  window.history.replaceState({}, null, location.pathname);
  return (
    <div>
      <p>{name}</p>
      <img src={img}></img>
      <p>{id < 10 ? `No.00${id}` : id < 100 ? `No.0${id}` : `N.0${id}`}</p>
      <p>{desc}</p>
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
