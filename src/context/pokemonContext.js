import React, { useReducer } from "react";
import { getAllPokemon, getPokemon } from "../services/pokemonFunc";

const pokemonContext = React.createContext();

const INIT_STATE = {
  pokemons: [],
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_POKEMONS":
      return { ...state, pokemons: action.payload };

    default:
      return state;
  }
};
const PokemonContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const firstUrl = "https://pokeapi.co/api/v2/pokemon";

  const fetchData = async (data) => {
    try {
      const response = await getAllPokemon(firstUrl);
      console.log(response);
      let action = {
        type: "GET_POKEMONS",
        payload: response.da,
      };
    } catch (error) {
      console.log(error);
    }
  };
  const pokemonAllArr = async (data) => {
    let pokemonArr = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonFetch = await getPokemon(pokemon.url);
        return pokemonFetch;
      })
    );
    console.log(pokemonArr);
    let action = {
      type: "GET_POKEMONS",
      payload: pokemonArr.data,
    };
    dispatch(action);
  };
  return (
    <pokemonContext.Provider
      value={{
        fetchData,
        pokemons: state.pokemons,
      }}
    ></pokemonContext.Provider>
  );
};
export default PokemonContextProvider;
