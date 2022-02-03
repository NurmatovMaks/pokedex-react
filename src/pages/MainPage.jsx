import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getAllPokemon, getPokemon } from "../services/pokemonFunc";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

const MainPage = (props) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const firstUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fethcData() {
      const response = await getAllPokemon(firstUrl);
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      pokemonAllArr(response.results);
    }
    fethcData();
  }, []);
  const next = async () => {
    if (!nextUrl) return;
    let data = await getAllPokemon(nextUrl);
    await pokemonAllArr(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  };
  const prev = async () => {
    if (!prevUrl) return;

    let data = await getAllPokemon(prevUrl);
    await pokemonAllArr(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  };
  const pokemonAllArr = async (data) => {
    let pokemonArr = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonFetch = await getPokemon(pokemon.url);
        return pokemonFetch;
      })
    );
    setPokemonData(pokemonArr);
  };
  return (
    <>
      <NavBar />
      <div className="context">
        <div
          className="left-bar"
          style={{
            width: "20%",
            height: "100%",
            marginTop: "2%",
            marginLeft: "5px",
          }}
        >
          asd asdad asdasda asdasdas asdasdasasdasda asdasdas asdasda
        </div>
        {pokemonData ? (
          <Container>
            <Row style={{ justifyContent: "center" }}>
              {pokemonData.map((p) => (
                <Col
                  style={{ width: "30%" }}
                  key={p.id}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={6}
                >
                  <PokemonCard pokemon={p} />
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
      <div className="btn">
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </>
  );
};

export default MainPage;
