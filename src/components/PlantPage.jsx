import plants from "./data.json"

// ***Actively working code***

// function Plants({ chosenPlant }) {
//     let listPlants = plants.map(plant =>
//         <div key={plant.id}>
//             <h2>{plant.name}</h2>
//             <img src={plant.image} alt={plant.name} height={500} width={500} className='img' />
//             <ul>
//                 <li><label>Type: </label>{plant.type}</li>
//                 <li><label>Water Frequency: </label>{plant.water}</li>
//                 <li><label>Light Ammount: </label>{plant.light}</li>
//                 <li><label>Preferred Temperature: </label>{plant.temperature}</li>
//             </ul>
//             <hr />
//         </div>
//     )
//         return (
//             <ul>
//                 {listPlants}
//             </ul>
//         );
//     }

// ***TESTING***

// function Plants({ chosenPlant }) {
//     // let listPlants;
//     for (let i = 0; i < plants.length; i++) {
//         if (plants[i].id === chosenPlant) {
//            let listPlants = plants[i] = (plant) =>
//                 <div key={plant[i].id}>
//                     <h2>{plant[i].name}</h2>
//                     <img src={plant[i].image} alt={plant[i].name} height={500} width={500} className='img' />
//                     <ul>
//                         <li><label>Type: </label>{plant[i].type}</li>
//                         <li><label>Water Frequency: </label>{plant[i].water}</li>
//                         <li><label>Light Ammount: </label>{plant[i].light}</li>
//                         <li><label>Preferred Temperature: </label>{plant[i].temperature}</li>
//                     </ul>
//                     <hr />
//                 </div>
            
//             return (
//                 <ul>
//                     {listPlants}
//                 </ul>
//             );
//         }
//     }
// }

// ***TESTING 2***

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
                        <li><label>Light Ammount: </label>{plants[i].light}</li>
                        <li><label>Preferred Temperature: </label>{plants[i].temperature}</li>
                    </ul>
                    <hr />
                </div>

            );
        }
    }
}



export default Plants;