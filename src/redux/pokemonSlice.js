import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA, { NUMBER_SIX } from "../constant/constant";
import { toast } from "react-toastify";

const initialState = {
  myPokemons: JSON.parse(localStorage.getItem("myPokemons")) || [],
  foundPokemon: {
    img_url: "",
    korean_name: "",
    types: [],
    id: null,
    description: "",
  },
  randomPokemons: [],
};

const pokemonSlice = createSlice({
  name: "myPokemonList",
  initialState,
  reducers: {
    addInMyPoke: (state, action) => {
      if (state.myPokemons.length >= NUMBER_SIX) {
        toast.error(`포켓몬은 최대 6마리만 선택할 수 있습니다.`);
        return;
      }
      const isContain = state.myPokemons.some((myPokemon) => {
        return myPokemon.id === action.payload.id;
      });
      if (isContain) {
        toast.error(`이미 선택된 포켓몬은 추가 할 수 없습니다.`);
        return;
      }

      state.myPokemons.push(action.payload);
      toast.success(`${action.payload.korean_name}, 넌 내거야!`);
      localStorage.setItem("myPokemons", JSON.stringify(state.myPokemons));
    },
    getOutMyPoke: (state, action) => {
      const removedMyPokeMons = state.myPokemons.filter((myPokemon) => {
        if (myPokemon.id !== action.payload.id) {
          return action.payload;
        }
      });
      state.myPokemons = removedMyPokeMons;
      toast.info(`가라, ${action.payload.korean_name}! 몸통박치기!!`);
    },
    findPoke: (state, action) => {
      const foundPoke = MOCK_DATA.find((data) => {
        if (data.id === action.payload) {
          return data;
        }
      });
      state.foundPokemon = foundPoke;
    },
    findRandomPoke: (state, action) => {
      const foundPoke = MOCK_DATA.find((data) => data.id === action.payload);
      if (foundPoke) {
        state.randomPokemons.push(foundPoke);
      }
    },
    resetRandoms: (state) => {
      state.randomPokemons = [];
    },
  },
});
export const {
  addInMyPoke,
  getOutMyPoke,
  findPoke,
  findRandomPoke,
  resetRandoms,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
