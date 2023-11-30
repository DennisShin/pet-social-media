import AdoptionForm from "./AdoptionForm.js"
import AvailableAnimals from "./AvailableAnimals.js"
import {useState} from 'react'
import { useNavigate } from "react-router-dom"


export default function AdoptionPage(){
    //setting state for the application data
    const [applicationData, setApplicationData] = useState({name:"", email:"", petName:"", petBefore:"", work:"", 
                                                            housing:"", incapacitated:"", otherAnimals:"", 
                                                            otherAnimalName:"", isFlexible:""})
    //function for setting application data on change
    function handleApplication(event){
        setApplicationData({...applicationData, [event.target.name]: event.target.value})}

    //new application data object
    const newApplication= {name:applicationData.name, email: applicationData.email, petName: applicationData.petName,
                                            petBefore: applicationData.petBefore, work:applicationData.work, 
                                            housing:applicationData.housing, incapacitated:applicationData.incapacitated, 
                                            otherAnimals:applicationData.otherAnimals, otherAnimalName:applicationData.otherAnimalName,
                                             isFlexible:applicationData.isFlexible }
    //submission function                                       
    function sendApplication(event){
        event.preventDefault();
        fetch("/api/users/<int:id>/adoptions", {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newApplication)
        }).then(response=>response.json())

    //resets application to blank
        setApplicationData({name:"", email:"", petName:"", petBefore:"", work:"", 
            housing:"", incapacitated:"", otherAnimals:"", 
            otherAnimalName:"", isFlexible:""})}

    return(
    <div>
    <AvailableAnimals/>
    <AdoptionForm
        addApplication = {sendApplication}
        handleApplication = {handleApplication}
        applicationData = {applicationData}/>
    </div>
)
}
