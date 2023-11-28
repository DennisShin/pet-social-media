
export default function AdoptionForm({addApplication, handleApplication, applicationData}){
return(
    <div>
    <form className="adoptionForm" onSubmit={addApplication}>
        <label className="form-label inline text-base m-2">Your Name </label>
        <input type='text' name="name" value={applicationData.name} onChange={handleApplication} className="px-1 py-1"></input>
        
        <label className="form-label inline text-base m-2">Your Email </label>
        <input type='text' name="email" value={applicationData.email} onChange={handleApplication} className="px-1 py-1"></input>
        
        <label className="form-label inline text-base m-2" > Animal you are interested in: </label>
        <input type='text' name="petName" value={applicationData.pet} onChange={handleApplication} className="px-1 py-1"></input>

        <label>Have you had a pet before?</label>
        <select name = 'petBefore' value={applicationData.petBefore} onChange={handleApplication} className="px-1 py-1 rounded-full">
            <option value="yesPet">Yes</option>
            <option value="noPet">No</option>
        </select>
        
        <div> 
            <label className="form-label inline text-base m-2">Are you employed?</label>
            <select name='work' value={applicationData.work} onChange={handleApplication} className="px-1 py-1 rounded-full">
                <option>Select One</option>
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
                <option value="unemployed">Unemployed</option>
            </select>
        </div>
        
        <div> 
            <label className="form-label inline text-base m-2">What is your housing situation?</label>
            <select name='housing' value={applicationData.housing} onChange={handleApplication} className="px-1 py-1 rounded-full">
                <option>Select One</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
            </select>
        </div>
        
        <label className="form-label inline text-base m-2" > Who will take care of your pet if you become unable? </label>
        <input type='text' name="incapacitated" value={applicationData.incapacitated} onChange={handleApplication} className="px-1 py-1"></input>
       
        <div>
        <label className="form-label inline text-base m-2" >Are there other animals in your home?</label>
            <select name='otherAnimals' value={applicationData.housing} onChange={handleApplication} className="px-1 py-1 rounded-full">
                <option>Select One</option>
                <option value="yesAnimals">Yes</option>
                <option value="noAnimals">No</option>
            </select>
            <label>If yes, tell us about your other pets:</label>
            <input type="text" name="otherAnimalName" value={applicationData.otherAnimals} onChange={handleApplication} className="px-1 py-1"/>
        </div>
       
        <label className="form-label inline text-base m-2" >Would you be open to other animals if this one is not available? </label>
            <select name='isFlexible' value={applicationData.isFlexible} onChange={handleApplication} className="px-1 py-1 rounded-full"></select>
                <option>Select One</option>
                <option value="yesFlex">Yes</option>
                <option value="noFlex">No</option>
    
    <input id= "submitApplication" type="submit"/>
    </form>
</div> )
}
