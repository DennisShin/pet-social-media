import PetProfile from "./PetProfile";
import AddPetProfile from "./AddPetProfile.js";

import {useState, useEffect} from 'react'

export default function SocialPage({user}){

const [petList, setPetList] = useState([])
const [friendPetList, setFriendPetList] = useState([])
const [newPetProfile, setNewPetProfile] = useState({name:"", photo:"", age:"", type:"", size:"", gender:"", description:""})

//list of only the user's pets
useEffect(()=> {
        fetch("/api/me/pets")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPetList(data)})
        }, [])

// useEffect(()=>{
//     fetch('/api/pets')
//     .then(response=>response.json())
//     .then(data=>setFriendPetList(data))
// },[])

//adding a pet
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
    <div>
        <h4 className="text-3xl">My Pets</h4>
        <br/>
    <div className="flex p-4">
        {petList.map(pet=> <PetProfile key={pet.id}
                    photo = {pet.photo}
                    name={pet.name}
                    type = {pet.type}
                    age={pet.age}
                    gender={pet.gender}
                    size = {pet.size}
                    description = {pet.description}/>)}
     </div>
        <br/>
    <h4 className="text-3xl">My Pet's Friends</h4>
       {/* {friendPetList.map(pet=>
        <PetProfile/>)}      */}
        <br/>
       <div className="flex p-4 max-w-sm rounded-lg justify-center border-slate border-8 ml-8">
        <p>Coming soon! </p>
        </div> 
        <br/>
        <AddPetProfile handleNewPet={handleNewPet}
                        addNewPetProfile = {addNewPetProfile}
                        newPetData = {newPetData}/>
                                 
    </div>
)
}