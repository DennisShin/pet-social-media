import {NavLink} from "react-router-dom"

export default function NavBar(){
    return(
    <nav id="navBar">
        <NavLink className="hover:text-slate-500" to="/">Home</NavLink>
        <NavLink className= "hover:text-slate-500" to="Social">Social</NavLink>
        <NavLink className=" hover:text-slate-500" to="Shop">Shop</NavLink>
        <NavLink className=" hover:text-slate-500" to="Adoption">Adopt</NavLink>
   </nav> )
}