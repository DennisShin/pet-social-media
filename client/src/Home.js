import NavBar from './NavBar.js'
import UserProfile from "./Routes/Social/UserProfile";
import {Outlet, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react'
import './css/App.css';


export default function Home(){
// const [user, setUser] = useState("")

// useEffect(()=>{
//     fetch("/api/users/user_id").then(response=>response.json())
//     .then(data=> setUser(data))
// })

const navigate = useNavigate()

function logOut(){
    navigate('/LogIn')
}

return(
<div>
    <header>
        <p className=''>
            <button className="text-sm absolute top-0 right-2 h-16 w-20 " onClick={logOut}>Log Out</button>
        </p>
        <NavBar/>
    </header>
    <div className='border-t-1'>
    <UserProfile/>
    <Outlet/>
    
    </div>
    </div>
)
}