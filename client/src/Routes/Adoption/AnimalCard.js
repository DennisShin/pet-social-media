export default function AnimalCard({name, photo, gender, type, age, size, description, applyToAdopt}){

return(


  <div className="max-w-sm rounded-lg bg-whiteish justify-center border-slate border-8 ml-8"  >
        <img className="w-full" src={photo} alt={name} />
            <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-slate">{name}</h3>
            <div className="mb-3 text-sm  text-slate">
                <p >{type}</p>
                <p >{age} year(s) old</p>
                <p >{gender}</p>
                <p >{size}</p>
                <p>{description}</p>
            </div>
        <button onClick={applyToAdopt} type='button'>Apply to adopt</button>
        </div>    
</div>

)
}