import {useNavigate} from 'react-router-dom';
import {useState} from 'react'

export default function LogIn(){
const navigate = useNavigate()

const [user, setUser] = useState({username:"", password:""})
  
function handleLogIn(event){
      event.preventDefault();
      setUser({...user, [event.target.name]: event.target.value})
        }
      const userCred = {username: user.username, password : user.password}

function logIn(event){
  event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(userCred)
    }).then(response=> response.json())
    .then(data=> setUser(data))
    if (user){
      navigate('/Home')}
    }
  
function toSignUp(){
    navigate('/signup')
  }

    return(
<div className='p-8'>
     <div className=" w-full max-w-sm bg-whiteish border border-slate rounded-lg shadow p-7">
        <form onSubmit={logIn} className="space-y-6">
        <h5 className="text-xl font-medium text-slate dark:text-whiteish">Please log in or sign up below!</h5>
            <label className="block mb-2 text-sm font-medium text-slate dark:text-whiteish">Username:</label>
            <input required type="text" name="username" value={user.username} onChange={handleLogIn} className=" border border-slate text-black text-sm rounded-lg block w-full p-2.5"/>
  
            <label className="block mb-2 text-sm font-medium text-slate dark:text-white">Password:</label>
            <input required type="text" name="password" value={user.password} onChange={handleLogIn} className=" border border-slate text-black text-sm rounded-lg block w-full p-2.5"/>
            <button className="w-full text-whiteish bg-darkbrown hover:bg-darkestbrown font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Login to Paws</button>
          </form>
        </div>
        <br/>
     <button onClick={toSignUp} className="p-4 w-l text-whiteish  bg-darkbrown hover:bg-darkestbrown font-medium rounded-lg text-sm text-center">Sign up for Paws</button>
     </div>
    )
}