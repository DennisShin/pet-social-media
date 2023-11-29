export default function AnimalCard({name, photo, gender, type, age, size, description}){

return(
  <div className="max-w-sm border bg-beige border-slate rounded-lg" >
        <img className="rounded-t-lg" src={photo} alt={name} />
            <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-slate">{name}</h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{type}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{age} year(s) old</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{gender}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{size}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>    
</div>
)
}