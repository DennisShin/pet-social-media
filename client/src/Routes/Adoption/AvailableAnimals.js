import {useState, useEffect} from 'react'
import AnimalCard from './AnimalCard.js'

export default function AvailableAnimals(){
    const [availableAnimals, setAvailableAnimals] = useState([])

    useEffect(()=>{
        fetch().then(response => response.json()).then(data=>setAvailableAnimals(data))
    })

    return(
    <div>
        {availableAnimals.map(animal=>
            <AnimalCard key = {animal.id}
                name = {animal.name}
                photo = {animal.photos.medium}
                breed = {animal.breeds.primary}
                age = {animal.age}
                size = {animal.size}
                gender = {animal.gender}
                traits = {animal.tags}
                />
        )}
   </div> )

}