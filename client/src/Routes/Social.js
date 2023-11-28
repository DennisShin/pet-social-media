import PetProfile from "./Social/PetProfile";
import AddPetProfile from "./Social/AddPetProfile";
import UserProfile from "./Social/UserProfile";
import {useState, useEffect} from 'react'

export default function Social(){
const [petList, setPetList] = useState([])
const [newPetProfile, setNewPetProfile] = useState({name:"", photo:"", age:"", type:"", size:"", gender:"", traits:"", interests:""})

useEffect(()=> fetch().then(response => response.json()).then(data=>setPetList(data)))

function handleNewPet(event){
    setNewPetProfile({...newPetProfile, [event.target.name]: event.target.value})

const newPetData = {name:newPetProfile.name, photo:newPetProfile.photo, size:newPetProfile.size, type:newPetProfile.type, age:newPetProfile.age, gender:newPetProfile.gender, 
        traits:newPetProfile.traits, interests:newPetProfile.interests}

function addNewPetProfile(event){
    event.preventDefault();
    fetch("", {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(newPetData)})
        .then(response=>response.json())
        .then(data=>setPetList([...petList, data]))
    //resets pet profile form
    setNewPetProfile({...newPetProfile, [event.target.name]: event.target.value})
}

return(
    <div>
        <UserProfile/>
        {petList.map(pet=>
        <PetProfile key={pet.id}
                    photo = {pet.photo}
                    name={pet.name}
                    type = {pet.type}
                    age={pet.age}
                    gender={pet.gender}
                    size = {pet.size}
                    traits={pet.traits}
                    interests={pet.interests}/>)}
        <AddPetProfile handleNewPet={handleNewPet}
                        addNewPetProfile = {addNewPetProfile}
                        newPetData = {newPetData}
                        />
    </div>
)
}}