import { createSlice } from "@reduxjs/toolkit";
import { NUMBER_SIX } from "../constant/constant";

const initialState = {
  myPokemons: JSON.parse(localStorage.getItem("myPokemons")) || [],
};

const pokemonSlice = createSlice({
  name: "myPokemonList",
  initialState,
  reducers: {
    addInMyPoke: (state, action) => {
      if (state.myPokemons.length >= NUMBER_SIX) {
        alert(`포켓몬은 최대 6마리만 선택할 수 있습니다.`);
        return;
      }
      const isContain = state.myPokemons.some((myPokemon) => {
        return myPokemon.id === action.payload.id;
      });
      if (isContain) {
        alert(`이미 선택된 포켓몬은 추가 할 수 없습니다.`);
        return;
      }

      state.myPokemons.push(action.payload);
      localStorage.setItem("myPokemons", JSON.stringify(state.myPokemons));
    },
    getOutMyPoke: (state, action) => {
      const removedMyPokeMons = state.myPokemons.filter((myPokemon) => {
        if (myPokemon.id !== action.payload.id) {
          return action.payload;
        }
      });
      state.myPokemons = removedMyPokeMons;
    },
  },
});
export const { addInMyPoke, getOutMyPoke } = pokemonSlice.actions;
export default pokemonSlice.reducer;
