import {NavLink} from "react-router-dom"

export default function NavBar(){
    return(
    <nav id="navBar" className= "flex space-x-3 text-base">
        <NavLink className="text-darkbrown hover:text-darkestbrown" to="/home">Home</NavLink>
        <NavLink className= "text-darkbrown hover:text-darkestbrown" to="/home/social">Social</NavLink>
        <NavLink className="text-darkbrown hover:text-darkestbrown" to="/home/adoption">Adopt</NavLink>
        <NavLink className="text-darkbrown hover:text-darkestbrown" to="/home/shop">Shop</NavLink>
        
   </nav> )
}