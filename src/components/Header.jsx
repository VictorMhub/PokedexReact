import React, { useContext } from "react";
import Context from '../context/Context'

function Header () {
    const { onInputChange } = useContext(Context);
    

    return(
        <header>
            <label htmlFor="generation">
                Escolha a Região:
                <select name="generation" onChange={onInputChange}>
                    <option value={0}>Kanto</option>
                    <option value={151}>Johto</option>
                    <option value={251}>Hoenn</option>
                    <option value={386}>Sinnoh</option>
                    <option value={494}>Unova</option>
                    <option value={645}>Kalos</option>
                    <option value={721}>Alola</option>
                    <option value={809}>Galar</option>
                </select>
            </label>
        </header>
    )
}


export default Header;