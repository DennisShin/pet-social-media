import {NavLink} from "react-router-dom"

export default function NavBar(){
    return(
    <nav id="navBar" className= "p-2 space-x-5 text-base flex ">
        <NavLink className="text-darkbrown hover:text-darkestbrown text-center" to="/home/userprofile">Home</NavLink>
        <NavLink className= "text-darkbrown hover:text-darkestbrown text-center" to="/home/social">Social</NavLink>
        <NavLink className="text-darkbrown hover:text-darkestbrown text-center" to="/home/adoption">Adopt</NavLink>
        <NavLink className="text-darkbrown hover:text-darkestbrown text-center" to="/home/shop">Shop</NavLink>
        
   </nav> )
}