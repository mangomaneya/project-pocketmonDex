import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/dex">포켓몬 도감 시작하기</Link>
    </div>
  );
};

export default Home;
