export default function PetProfile({name, age, gender, type, size, photo, description}){

    
    return(
    <div className="max-w-sm rounded-lg justify-center shadow-lg bg-whiteish border-slate border-8 ml-8"  >
        <img className="w-full" src={photo} alt={name} />
            <div className="p-3">
                <h3 className="mb-2 text-lg font-bold text-slate">{name}</h3>
            <div className="mb-3 text-sm p-3 text-slate">
                <p >{type}</p>
                <p >{age} year(s) old</p>
                <p >{gender}</p>
                <p >{size}</p>
                <p>{description}</p>
            </div>
        </div>    
</div>
    )

}
