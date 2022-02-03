import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <>
      <Card
        className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded"
        style={{ border: "none" }}
      >
        <Link
          style={{ width: "265px", height: "200px", marginLeft: "10%" }}
          to={`/pokemon/${pokemon.id}`}
        >
          <Card.Img
            style={{ width: "150px" }}
            src={pokemon.sprites.other.dream_world.front_default}
            variant="top"
          />
        </Link>
        <Card.Body
          className={`${pokemon.types[0].type.name} rounded text-white`}
        >
          <Link className="link-name" to={`/pokemon/${pokemon.name}`}>
            <Card.Title as="div">
              <strong>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default PokemonCard;
