export default function AnimalCard({name, photo, gender, breed, age, size, traits}){

return(
<div>
    <li className="card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{age} year(s) old</p>
      <p>{gender}</p>
      <p>{breed}</p>
      <p>{size}</p>
      <p>{traits}</p>
    </li>
</div>
)
}