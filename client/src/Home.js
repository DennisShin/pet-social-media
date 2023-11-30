import NavBar from './NavBar.js'
import {Outlet, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react'
import './css/App.css';


export default function Home(){
const [user, setUser] = useState("")



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
    <Outlet/>


    </div>
)
}