export default function AddPetProfile({newPetData, handleNewPet, AddNewPetProfile}){

    return(
    <div>
    <form className="w-full max-w bg-whiteish border border-slate rounded-lg shadow p-8"  onSubmit={AddNewPetProfile}>
        <h4 className="text-darkestbrown text-4xl font-pacifico">Add a new pet:</h4>
        <br/>
        <label className="form-label inline text-base m-2 text-slate" > Photo Link: </label>
        <input type='text' name="petPhoto" value={newPetData.photo} onChange={handleNewPet} className="border border-slate text-black text-sm rounded-lg  w-1/4 p-2 my-2"/>

        <label className="form-label inline text-base m-2 text-slate" >Pet Name: </label>
        <input type='text' name="petName" value={newPetData.pet} onChange={handleNewPet} className="border border-slate text-black text-sm rounded-lg  w-1/4 p-2 my-2"/>
        <br/>
        <label className="form-label inline text-base m-2 text-slate"> Pet Type: </label>
        <select name="petType" value={newPetData.size} onChange={handleNewPet} className=" text-slate rounded-full text-sm p-2 my-2">
            <option name="dog">Dog</option>
            <option name="medium">Cat</option>
        </select>
        <label className="form-label inline text-base m-2 text-slate" > Other: </label>
        <input type="text" name='otherType'  value={newPetData.size} onChange={handleNewPet} className="border border-slate text-black text-sm rounded-lg  w-1/4 p-2 my-2"/>
        <br/>
        <label className="form-label inline text-base m-2 text-slate" > Age: </label>
        <input type='text' name="petAge" value={newPetData.age} onChange={handleNewPet} className="border border-slate text-black text-sm rounded-lg  w-1/4 p-2 my-2"/>

        <label className="form-label inline text-base m-2 text-slate"> Size: </label>
        <select name="petSize" value={newPetData.size} onChange={handleNewPet} className=" text-slate rounded-full text-sm p-2 my-2">
            <option name="small">Small (0-25 lbs)</option>
            <option name="medium">Medium (26-50 lbs)</option>
            <option name="large">Large (51-75 lbs)</option>
            <option name="huge">Seriously Huge (75+ lbs)</option>
        </select>

        <label className="form-label inline text-base m-2 text-slate" > Gender: </label>
        <input type='text' name="petGender" value={newPetData.gender} onChange={handleNewPet} className="border border-slate text-black text-sm rounded-lg  w-1/4 p-2 my-2"/>

        <br/>
        <label className="form-label inline text-base m-2 text-slate" > Description: </label>
        <input type='text' name="petDescription" value={newPetData.description} onChange={handleNewPet} className="border border-slate text-black text-sm rounded-lg  w-1/2 p-2 my-2"/>

    <button className="p-2 w-m text-whiteish bg-darkbrown hover:bg-darkestbrown font-medium rounded-lg text-sm text-center">Add your pet!</button>
    </form>
</div>
    )
}