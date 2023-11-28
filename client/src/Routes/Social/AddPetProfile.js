export default function AddPetProfile({newPetData, handleNewPet, AddNewPetProfile}){

    <form className="PetProfileForm" onSubmit={AddNewPetProfile}>

        <label className="form-label inline text-base m-2" > Photo: </label>
        <input type='text' name="petPhoto" value={newPetData.photo} onChange={handleNewPet} className="px-1 py-1"></input>

        <label className="form-label inline text-base m-2" >Pet Name: </label>
        <input type='text' name="petName" value={newPetData.pet} onChange={handleNewPet} className="px-1 py-1"></input>

        <label className="form-label inline text-base m-2" > Pet Type: </label>
        <select name="petType" value={newPetData.size} onChange={handleNewPet}>
            <option name="dog">Dog</option>
            <option name="medium">Cat</option>
        </select>
        <input type="text" name='otherType' className="px-1 py-1" value={newPetData.size} onChange={handleNewPet}>other: </input>

        <label className="form-label inline text-base m-2" > Age: </label>
        <input type='text' name="petAge" value={newPetData.age} onChange={handleNewPet} className="px-1 py-1"></input>

        <label className="form-label inline text-base m-2" > Size: </label>
        <select name="petSize" value={newPetData.size} onChange={handleNewPet}>
            <option name="small">Small (0-25 lbs)</option>
            <option name="medium">Medium (26-50 lbs)</option>
            <option name="large">Large (51-75 lbs)</option>
            <option name="huge">Seriously Huge (75+ lbs)</option>
        </select>

        <label className="form-label inline text-base m-2" > Gender: </label>
        <input type='text' name="petGender" value={newPetData.gender} onChange={handleNewPet} className="px-1 py-1"></input>

        <label className="form-label inline text-base m-2" > Traits: </label>
        <input type='text' name="petTraits" value={newPetData.traits} onChange={handleNewPet} className="px-1 py-1"></input>

        <label className="form-label inline text-base m-2" > Interests: </label>
        <input type='text' name="petInterests" value={newPetData.interests} onChange={handleNewPet} className="px-1 py-1"></input>

    </form>

}