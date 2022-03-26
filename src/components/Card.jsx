import React, { useContext } from "react";
import Context from "../context/Context";
import '../style.css'

function Card () {
    const { pokemonUrl, pokemonUrlLength, gens } = useContext(Context) 
    const NUMERO_DE_MOVES = 4
    const { moves } = pokemonUrl
    const { stats } = pokemonUrl
    const { types } = pokemonUrl
    const filteredMoves = moves !== undefined ? moves.slice(0, NUMERO_DE_MOVES) : moves;
    console.log(stats);

    const dinamicBackGround = () => {
       if(types[0].type.name === 'fire') {
          return 'pokemon_backGround_fire'
       }

       if(types[0].type.name === 'grass') {
          return 'pokemon_backGround_grass'
       }

       if(types[0].type.name === 'water') {
          return 'pokemon_backGround_water'
       }
    }
    
    return(
    <>
        {
         pokemonUrlLength === false ? <h3>Escolha seu pokemon</h3> : <section className="pokemon_card">
        <div className={`pokemon_heading ${dinamicBackGround()}`}>
         <h1 className="pokemon_name">{pokemonUrl.name[0].toUpperCase() + pokemonUrl.name.substr(1)}</h1>
         <h4 className="pokemon_type">{`Type: ${ types[0].type.name }`}</h4>
         <img 
            src={pokemonUrl.sprites.other.home.front_default}
            alt={`Imagem do ${pokemonUrl.name}`}
            className="pokemon_image"
         />
         </div>

         <h3>Moves:</h3>   
         {filteredMoves.map((move) => (
            <li key={move.move.name}>{move.move.name}</li>
         ))}
         

         <h3>Stats</h3>
         {stats.map((stat) => (
            <li key={stat.stat.name}>{`${stat.stat.name}: ${stat.base_stat}`}</li>
         ))}
        </section>
        }
   </> )
}

export default Card;