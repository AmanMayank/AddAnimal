import { useState } from 'react'

import bird from './images/bird.svg'
import cat from './images/cat.svg'
import cow from './images/cow.svg'
import dog from './images/dog.svg'
import gator from './images/gator.svg'
import horse from './images/horse.svg'
import heart from './images/heart.svg'

const svgMap ={bird, cat, cow, dog, gator, horse}

function AnimalCard({type}){
    const [clicks, setClicks] = useState(0);

    const handleClick=()=>{
        if(clicks<6){
            setClicks(clicks+1);
        }else{
            return
        }
        
    }

    return   (
    <div style={{display:'inline', margin:10}} onClick={handleClick}>
        <img alt="animal" src={svgMap[type]} style={{width:150}}/>
        <img alt="heart" src={heart} style={{ width : 10 + 10*clicks}}/>
    </div>
    )
}

export default AnimalCard;