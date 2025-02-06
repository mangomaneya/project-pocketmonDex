import { useState } from "react";
import { createContext } from "react";
import { NUMBER_SIX } from "../constant/constant";
//1. 콘텍스트 생성 - export
//2. 콘텍스트 프로바이더 생성 -export
//2-1. 콘텍스트 프로바이더는 인자로 칠드런을 받는다
//2-2. 콘텍스트 프로바이더 안에 콘텍스트를 작성하고, 프로바이더 안의 밸류로 지정해준다.

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  //마이포켓몬 스테이트 - 로컬스토리지 설정
  const [myPokeMons, setMyPokeMons] = useState(
    JSON.parse(localStorage.getItem("myPokemons")) || []
  );

  //선택한 포켓몬을 마이포켓몬에 추가
  const addInMyPoke = (pokemon) => {
    //최대포켓몬 수 설정
    if (myPokeMons.length >= NUMBER_SIX) {
      alert(`포켓몬은 최대 6마리만 선택할 수 있습니다.`);
      return;
    }
    //중복 포켓몬 방지
    const isContain = myPokeMons.some((myPokemon) => {
      return myPokemon.id === pokemon.id;
    });
    if (isContain) {
      alert(`이미 선택된 포켓몬은 추가 할 수 없습니다.`);
      return;
    }
    setMyPokeMons((prev) => [...prev, pokemon]);
    //마이포켓몬 데이터 확인
    // console.log("myPokeMons", myPokeMons);
  };

  //선택한 포켓몬을 마이포켓몬에서 제거
  const getOutMyPoke = (pokemon) => {
    const removedMyPokeMons = myPokeMons.filter((myPokemon) => {
      if (myPokemon.id !== pokemon.id) {
        return pokemon;
      }
    });
    setMyPokeMons(removedMyPokeMons);
    //마이포켓몬 데이터 확인
    console.log("myPokeMons", myPokeMons);
  };

  return (
    <PokemonContext.Provider value={{ myPokeMons, addInMyPoke, getOutMyPoke }}>
      {children}
    </PokemonContext.Provider>
  );
};
