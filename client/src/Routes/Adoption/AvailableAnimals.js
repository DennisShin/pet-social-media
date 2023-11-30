import {useState, useEffect} from 'react'
import AnimalCard from "./AnimalCard"

export default function AvailableAnimals(){
    const [availableAnimals, setAvailableAnimals] = useState([])

    useEffect(()=>{
        fetch("/api/adoptable_pets")
        .then(response => response.json())
        .then(data=>setAvailableAnimals(data))},[])

    return(
    <div className="flex p-4">
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