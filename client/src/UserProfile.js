import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

export default function UserProfile(){
 const [user, setUser] = useState({})

 useEffect(()=>{fetch('/api/me')
    .then(response=>response.json())
    .then(data=>setUser(data))}, [])


    return(
    <div>
    <div>
        <h2>Hello {user.name}!</h2>
    </div>
    <div className="flex p-4">
        <div className="pl-2.5 w-full h-3/4 max-w bg-whiteish border border-slate rounded-lg shadow p-8 py-4">
         <p>Your Orders</p>
        </div>
        <div className="pl-2.5 w-full h-3/4 max-w bg-whiteish border border-slate rounded-lg shadow p-8 py-4">
            <p>Your Adoption Applications</p>
        </div>
    </div>
    </div>

    )

    
}