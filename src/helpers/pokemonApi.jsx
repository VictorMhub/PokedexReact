
const fecthApiPokemon = async (gen) => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=${gen}`;

    try {
        const data = await fetch(URL);
        const result = await data.json()
        return result.results
    }catch (error) {
        return error;
      }


};

export const fecthPokemonsUrl = async (url) => {
    const urlPokemon = `${url}`;

    try {
        const data = await fetch(urlPokemon);
        const result = await data.json()
        return result
    }catch (error) {
        return error;
      }
}

export const fetchPoekemonById = async (id) => {
    try {
        const data = await fetch(id);
        const result = await data.json()
        return result
    }catch (error) {
        return error;
      }
}

export default fecthApiPokemon;