import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import PokemonOptions from "../components/PokemonOptions";
import  '../style.css'

function Home () {
    
    return(
        <>
        <section className="header_section">
            <Header />
        </section>
        <section className='pokemon-section'>
            <Card />
            <PokemonOptions />
        </section>
        </>
    )
}

export default Home;