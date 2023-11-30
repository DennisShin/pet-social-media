
export default function AdoptionForm({addApplication, handleApplication, applicationData}){
return(
    <div>
    <form className="pl-2.5 w-full max-w bg-whiteish border border-slate rounded-lg shadow p-8" onSubmit={addApplication}>
        <label className="form-label inline text-base m-2 text-slate">Your Name </label>
        <input type='text' name="name" value={applicationData.name} onChange={handleApplication} className="border border-slate text-black text-sm rounded-lg  w-5/6 p-2.5"/>
        <br/>
        <label className="form-label inline text-base m-2 text-slate">Your Email </label>
        <input type='text' name="email" value={applicationData.email} onChange={handleApplication} className="border border-slate text-black text-sm rounded-lg  w-5/6 p-2.5"/>
        <br/>
        <label className="form-label inline text-base m-2 text-slate" > Animal you are interested in: </label>
        <input type='text' name="petName" value={applicationData.pet} onChange={handleApplication} className="border border-slate text-black text-sm rounded-lg  w-5/6 p-2.5"/>
        <br/>
        <label className="form-label inline text-base m-2 text-slate">Have you had a pet before?</label>
        <select name = 'petBefore' value={applicationData.petBefore} onChange={handleApplication} className=" text-slate rounded-full text-sm p-3">
        <option >Select One</option>
            <option value="yesPet">Yes</option>
            <option  value="noPet">No</option>
        </select>
     
        <div> 
            <label className="form-label inline text-base m-2 text-slate">Are you employed?</label>
            <select name='work' value={applicationData.work} onChange={handleApplication} className=" text-slate rounded-full text-sm p-3">
            <option >Select One</option>
                <option  value="fullTime">Full Time</option>
                <option  value="partTime">Part Time</option>
                <option  value="unemployed">Unemployed</option>
            </select>
        </div>

        <div> 
            <label className="form-label inline text-base m-2 text-slate">What is your housing situation?</label>
            <select name='housing' value={applicationData.housing} onChange={handleApplication} className=" text-slate rounded-full text-sm p-3">
            <option >Select One</option>
                <option  value="House">House</option>
                <option value="Apartment">Apartment</option>
            </select>
        </div>

        <label className="form-label inline text-base m-2 text-slate" > Who will take care of your pet if you become unable? </label>
        <input type='text' name="incapacitated" value={applicationData.incapacitated} onChange={handleApplication} className="border border-slate text-black text-sm rounded-lg  w-5/6 p-2.5"/>
     
        <div>
        <label className="form-label inline text-base m-2 text-slate">Are there other animals in your home?</label>
            <select name='otherAnimals' value={applicationData.housing} onChange={handleApplication} className=" text-slate rounded-full text-sm p-3">
                <option  >Select One</option>
                <option  value="yesAnimals">Yes</option>
                <option value="noAnimals">No</option>
            </select>
            <label className="form-label inline text-base m-2 text-slate">If yes, tell us about your other pets:</label>
            <input type="text" name="otherAnimalName" value={applicationData.otherAnimals} onChange={handleApplication} className="border border-slate text-black text-sm rounded-lg  w-5/6 p-2.5"/>
        </div>

        <label className="form-label inline text-base m-2 text-slate" >Would you be open to other animals if this one is not available? </label>
            <select name='isFlexible' value={applicationData.isFlexible} onChange={handleApplication} className=" text-slate rounded-full text-sm p-3">
                <option >Select One</option>
                <option  value="yesFlex">Yes</option>
                <option value="noFlex">No</option>
                </select>
        <br/>
    <button className="p-2 w-m text-whiteish bg-darkbrown hover:bg-darkestbrown font-medium rounded-lg text-sm text-center" type="submit">Submit Application </button>
    </form>
</div> )
}
