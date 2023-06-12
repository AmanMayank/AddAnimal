import { useState } from "react";
import AnimalCard from "./AnimalCard";

function getRandomAnimal(){
  const animals =['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  
  return animals[Math.floor(Math.random()*animals.length)]
}

function App(){

    const[animals, setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalCard type={animal} key={index}/>
    })

    console.log(animals)

    return(
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimals}</div>
        </div>
    )
}

export default App;