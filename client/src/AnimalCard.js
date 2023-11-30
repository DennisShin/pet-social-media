export default function AnimalCard({name, photo, gender, type, age, size, description}){

return(
  <div className="max-w-sm md:flex flex-1 justify-center object-scale-down bg-red border-slate border-8 rounded-lg " >
        <img className="rounded-t-lg" src={photo} alt={name} />
            <div className="p-5">
                <h3 className="mb-2 text-lg font-bold tracking-tight text-slate">{name}</h3>
            <div className="mb-3 text-sm  text-slate">
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