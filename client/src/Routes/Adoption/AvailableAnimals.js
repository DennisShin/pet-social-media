import {useState, useEffect} from 'react'
import AnimalCard from "../../AnimalCard"

export default function AvailableAnimals(){
    const [availableAnimals, setAvailableAnimals] = useState([])

    useEffect(()=>{
        fetch("/api/pets")
        .then(response => response.json())
        .then(data=>setAvailableAnimals(data))},[])

    return(
    <div>
        {availableAnimals.map(animal=>
            <AnimalCard key = {animal.id}
                name = {animal.name}
                photo = {animal.photo}
                age = {animal.age}
                size = {animal.size}
                gender = {animal.gender}
                type = {animal.type}
                description = {animal.description}
                />
        )}
   </div> )

}