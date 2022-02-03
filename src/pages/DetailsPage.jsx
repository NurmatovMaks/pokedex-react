import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetailsPage = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const initUrl = "https://pokeapi.co/api/v2";
  const id = window.location.pathname;
  useEffect(() => {
    async function fethcData() {
      const response = await axios(initUrl + id);
      console.log(response);
      setPokemonData(response.data);
    }
    fethcData();
  }, []);
  console.log(pokemonData);

  return (
    <>
      <div className="detail-page">
        <Card
          className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded"
          style={{ border: "none", width: "24rem", height: "24rem" }}
        >
          <Card.Img
            style={{ width: "150px" }}
            src={pokemonData.sprites?.other?.dream_world.front_default}
            variant="top"
          />

          <Card.Body>
            <Card.Title
              // className={`${pokemonData.types[0]?.type.name} rounded text-white`}
              as="div"
            >
              <strong>
                {pokemonData.name?.charAt(0).toUpperCase() +
                  pokemonData.name?.slice(1)}
              </strong>
            </Card.Title>
          </Card.Body>
          <Link
            style={{ width: "265px", height: "200px", marginLeft: "10%" }}
            to={`/`}
          >
            <button>main</button>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default DetailsPage;
