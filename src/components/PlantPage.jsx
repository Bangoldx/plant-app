import plants from "./data.json"

// ***The One That Did It***

function Plants({ chosenPlant }) {
    for (let i = 0; i < plants.length; i++) {
        if (plants[i].id === chosenPlant) {
            return (
                <div key={plants[i].id}>
                    <h2>{plants[i].name}</h2>
                    <img src={plants[i].image} alt={plants[i].name} height={500} width={500} className='img' />
                    <ul>
                        <li><label>Type: </label>{plants[i].type}</li>
                        <li><label>Water Frequency: </label>{plants[i].water}</li>
                        <li><label>Light Amount: </label>{plants[i].light}</li>
                        <li><label>Preferred Temperature: </label>{plants[i].temperature}</li>
                    </ul>
                    <hr />
                </div>
            );
        }
    }
}

export default Plants;