import React, { useContext } from "react";
import Context from "../context/Context";
import '../style.css'

function PokemonOptions(){
    const { pokemons, handleClick } = useContext(Context);
    console.log(pokemons);
    return(
        <aside>
        <h2 className="title">Pokemons:</h2>
        <section className="pokemons_aside">
            {pokemons.map((pokemon) => (
                <button
                    key={pokemon.name}
                    id={pokemon.url}
                    onClick={ handleClick }
                    className="pokemon_options"
                >
                    {pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
                </button>
            ))}
        </section>
        </aside>
    )
}

export default PokemonOptions;