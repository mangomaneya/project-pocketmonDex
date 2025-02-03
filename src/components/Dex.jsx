// import { useState, useEffect } from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import PokemonList from "./PokemonList";
import { Fragment } from "react";
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
    <Fragment>
      <Dashboard />
      <PokemonList />
    </Fragment>
  );
};

export default Dex;
