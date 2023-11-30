import {useNavigate} from 'react-router-dom';
import {useState} from 'react'


export default function SignUp(){
const navigate = useNavigate()
const [newUserData, setNewUserData] = useState({username:"", name:"", email:"", zipcode:"", password:"", reason:""})

function handleSignUp(event){
    setNewUserData({...newUserData, [event.target.name]: event.target.value})
  }
  const newUser = {username: newUserData.username, name:newUserData.name, email:newUserData.email, zipcode:newUserData.zipcode, 
                password:newUserData.password, reason:newUserData.reason}

function addNewUser(event){
  event.preventDefault();
  fetch("/api/users", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(newUser)
  }).then(response=>response.json)
  navigate('/LogIn')
}

    return(
    <div className='p-2'>
        <h2 className='text-3xl' p-4>Sign Up</h2>
        <br/>
    <form className="pl-2.5 w-full max-w bg-whiteish border border-slate rounded-lg shadow p-8" onSubmit={addNewUser}>
        <label className="form-label inline text-base m-2 text-slate">Username</label>
        <input type='text' name="username" value={newUserData.username} onChange={handleSignUp} className="border leading-tight border-slate text-slate text-sm rounded-lg  w-1/2 p-2.5"/>
        <br/>
        <label className="form-label inline text-base m-2 text-slate">Your Name</label>
        <input type='text' name="name" value={newUserData.name} onChange={handleSignUp} className=" border border-slate text-slate text-sm rounded-lg  w-3/4 p-2.5"/>
        <br/>
        <label className="form-label inline text-base m-2 text-slate">Your Email </label>
        <input type='text' name="email" value={newUserData.email} onChange={handleSignUp} className=" border border-slate text-slate text-sm rounded-lg  w-3/4  p-2.5"/>
        <br/>
        <label className="form-label inline text-base m-2 text-slate">Your Zipcode </label>
        <input type='text' name="zipcode" value={newUserData.zipcode} onChange={handleSignUp} className=" border border-slate text-slate text-sm rounded-lg  w-3/4  p-2.5"/>
        <br/>
        <label className="form-label inline text-base m-2 text-slate" > Password </label>
        <input type='text' name="password" value={newUserData.password} onChange={handleSignUp} className=" border border-slate text-slate text-sm rounded-lg  w-3/4 p-2.5"/>
        <br/>
        <label className="form-label inline text-base m-2 text-slate">What brought you to our community?</label>
        <select name = 'reason' value={newUserData.reason} onChange={handleSignUp} className=" text-slate rounded-full text-sm p-4">
            <option value="friends">I want to make pet friends</option>
            <option value="adopt">I want to adopt a new pet</option>
            <option value="shop">I want to shop for my pet</option>
            <option value="all">All of the above!</option>
        </select>
        <br/>
        <button className="p-2 w-m text-whiteish bg-darkbrown hover:bg-darkestbrown font-medium rounded-lg text-sm text-center" type="submit">Submit</button>
    </form>
    </div>)

}