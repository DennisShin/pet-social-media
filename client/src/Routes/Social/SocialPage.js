import PetProfile from "./PetProfile";
import AddPetProfile from "./AddPetProfile";
import UserProfile from "./UserProfile";
import {useState, useEffect} from 'react'

export default function SocialPage(){

const [petList, setPetList] = useState([])
const [newPetProfile, setNewPetProfile] = useState({name:"", photo:"", age:"", type:"", size:"", gender:"", description:""})

useEffect(()=> {
        fetch("/api/pets")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPetList([data])
        })
        }, [])

function handleNewPet(event){
    setNewPetProfile({...newPetProfile, [event.target.name]: event.target.value})}

const newPetData = {name:newPetProfile.name, photo:newPetProfile.photo, size:newPetProfile.size, type:newPetProfile.type, age:newPetProfile.age, gender:newPetProfile.gender, 
        traits:newPetProfile.traits, interests:newPetProfile.interests}

function addNewPetProfile(event){
    event.preventDefault();
    fetch("/api/pets", {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(newPetData)})
        .then(response=>response.json())
        .then(data=>setPetList([...petList, data]))
    //resets pet profile form
    setNewPetProfile({...newPetProfile, [event.target.name]: event.target.value})
    }


return(
    <div style={{height: "50vh"}} >
        <UserProfile/>
        {petList.map(pet=> <PetProfile key={pet.id}
                    photo = {pet.photo}
                    name={pet.name}
                    type = {pet.type}
                    age={pet.age}
                    gender={pet.gender}
                    size = {pet.size}
                    description = {pet.description}/>)}
        <AddPetProfile handleNewPet={handleNewPet}
                        addNewPetProfile = {addNewPetProfile}
                        newPetData = {newPetData}
                        />
    </div>
)
}