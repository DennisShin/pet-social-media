export default function PetProfile({name, age, gender, type, size, photo, traits, interests}){
    return(
        <div>
            <li className="card">
                <img src={photo} alt={name} />
                <h3>{name}</h3>
                <p>{type}</p>
                <p>{age} year(s) old</p>
                <p>{gender}</p>
                <p>{size}</p>
                <p>Traits: {traits}</p>
                <p>Interests: {interests}</p>
            </li>
        </div>
    )

}