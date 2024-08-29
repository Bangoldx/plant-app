import { useState } from "react";
import Plants from "./PlantPage";

function Menu() {

    const [plant, setPlant] = useState();

    function HandleClick(e) {
        e.preventDefault();
        setPlant(e.target.value)
        console.log(typeof (plant))

    }
    return (
        <>
            <div>
                <form onSubmit={HandleClick}>
                    <label>
                        <select name="plants" onChange={(e) => setPlant(e.target.value)}>
                            <option value="">Pick your plant</option>
                            <option value="1">Ficus Ginseng Bonsai</option>
                            <option value="2">White Fox Aloe</option>
                            <option value="3">Frech Lavendar</option>
                            <option value="4">Tropical Banana</option>
                            <option value="5">Hens and Chicks</option>
                            <option value="6">Wandering Jew</option>
                            <option value="7">Purslane</option>
                            <option value="8">Lemon Balm</option>
                            <option value="9">Catnip</option>
                            <option value="10">Spearmint</option>
                            <option value="11">Rosemary</option>
                        </select>
                    </label>
                    {/* <input type="submit" /> */}
                </form>
            </div>

            <div>
                <Plants
                    chosenPlant={plant} />
            </div>

        </>

    )
}

export default Menu;