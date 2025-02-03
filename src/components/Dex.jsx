import { useState } from "react"
import Dashboard from "./Dashboard"
import { useEffect } from "react"
import PokemonList from "./PokemonList"

const Dex = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(()=>{
        
    },[])
  return (
    <div>Dex
        <Dashboard/>
        <PokemonList/>
    </div>
  )
}

export default Dex