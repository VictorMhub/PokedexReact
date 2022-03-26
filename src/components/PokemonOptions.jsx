import React, { useContext } from "react";
import Context from "../context/Context";
import '../style.css'

function PokemonOptions(){
    const { pokemons, handleClick } = useContext(Context);
    return(
        <aside>
        <h2>Pokemons:</h2>
        <section className="pokemons_aside">
            {pokemons.map((pokemon) => (
                <button
                    key={pokemon.name}
                    id={pokemon.url}
                    onClick={ handleClick }
                    className="pokemon_options"
                >
                    {pokemon.name}
                </button>
            ))}
        </section>
        </aside>
    )
}

export default PokemonOptions;