/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import fecthApiPokemon, { fecthPokemonsUrl } from '../helpers/pokemonApi';
import Context from '../context/Context';


function PokemonProvider ({ children }) {
    const [pokemons, setPokemons] = useState([])
    const [gens, setGens] = useState({
        generation: 0,
    })
    const [pokemonUrl, setPokemonUrl] = useState([])
    const [pokemonUrlLength, setPokemonUrlLength] = useState(false)
    const { generation } = gens;
    
    useEffect( async ()=> {
        const results  = await fecthApiPokemon(generation);
        console.log(results);
        setPokemons(results);
      }, [generation])

    const onInputChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setGens({
          [name]: value,
        });
      };
    const handleClick =  async ({ target }) => {
        const { id } = target;
        const result = await fecthPokemonsUrl(id)
        setPokemonUrl(result)
        setPokemonUrlLength(true)
    }
      const context = {pokemons,
        setPokemons,
        gens,
        setGens,
        onInputChange,
        pokemonUrl,
        setPokemonUrl,
        handleClick,
        pokemonUrlLength
    };
    return(
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    );
};

export default PokemonProvider;