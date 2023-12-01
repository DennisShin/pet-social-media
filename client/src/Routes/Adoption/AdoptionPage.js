import AdoptionForm from "./AdoptionForm.js"
import AvailableAnimals from "./AvailableAnimals.js"
import {useState, useEffect} from 'react'



export default function AdoptionPage(){
    //set state for user
    const [user, setUser]= useState({})


    
    useEffect(()=>{
        fetch("/api/me")
        .then(response=>response.json())
        .then(data=>setUser(data))
    },[])
    
    //setting state for the application data
    const [applicationData, setApplicationData] = useState({petName:"", petBefore:"", work:"", 
                                                            housing:"", incapacitated:"", otherAnimals:"", 
                                                            otherAnimalName:"", isFlexible:""})


    //take you to adoption page
    // function applyToAdopt(event){
    //     event.preventDefault()

    //     navigate('./home/adoption/adoptionform')
    

    //function for setting application data on change
    function handleApplication(event){
        setApplicationData({...applicationData, [event.target.name]: event.target.value})}

    //new application data object
    const newApplication= { petName: applicationData.petName, petBefore: applicationData.petBefore, work:applicationData.work, 
                                            housing:applicationData.housing, incapacitated:applicationData.incapacitated, 
                                            otherAnimals:applicationData.otherAnimals, otherAnimalName:applicationData.otherAnimalName,
                                             isFlexible:applicationData.isFlexible }
    //submission function                                       
    function sendApplication(event){
        event.preventDefault();
        fetch(`/api/users/${user.id}/adoptions`, {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newApplication)
        }).then(response=>response.json())
        .then(
        setApplicationData({ petName:"", petBefore:"", work:"", 
            housing:"", incapacitated:"", otherAnimals:"", 
            otherAnimalName:"", isFlexible:""}))}

    return(
    <div>
        <br/>
        <h4 className="text-3xl">Find Your New BFF</h4>
    <AvailableAnimals/>
    <br/>
    <AdoptionForm
        addApplication = {sendApplication}
        handleApplication = {handleApplication}
        applicationData = {applicationData}
        // applyToAdopt = {applyToAdopt}
        />
    </div>
)
}
