// import { useState, useEffect } from "react";
// import styled from "styled-components";
import StContainer from "../style/StContainer";
import Dashboard from "./Dashboard";
import PokemonList from "./PokemonList";
// import supabase from "../../supabaseClient";

const Dex = () => {
  // const [pokemon, setPokemon] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await supabase
  //       .from("POKEMON_MOCKDATA")
  //       .select("*");
  //     if (error) {
  //       console.log("error =>", error);
  //     } else {
  //       setPokemon(data);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <StContainer>
      <Dashboard />
      <PokemonList />
    </StContainer>
  );
};

export default Dex;
