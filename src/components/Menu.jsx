import { useState } from "react";
import Plants from "./PlantPage";
import data from "./data.json";

function Menu() {

    const [plant, setPlant] = useState();

    function HandleClick(e) {
        e.preventDefault();
    }
    return (
        <>
            <div>
                <form onSubmit={HandleClick}>
                    <label>
                        <select name="plants" onChange={(e) => setPlant(e.target.value)}>
                            <option value="">Pick A Plant</option>
                            {data.map((plant) => (
                                <option value={plant.id}>{plant.name}</option>
                            ))}
                        </select>
                    </label>
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