import React, { useEffect, useState } from 'react'
import Data from './Data'
import "./index.css"

const url = "https://fakestoreapi.com/products"

console.log(url)

 
const Fetch = () => {
    const [user, setUser] = useState([])

 const Handler =   async () =>{
    const res = await fetch(url)
    const Data = await res.json()
    setUser(Data)

 }
 

 useEffect(()=>{

    Handler()

 }, [])
 console.log(user)

  return (
    
   <div className='p-list'> 
      {
            user.map((p)=>  <Data {...p} key ={p.id}></Data>
            
            )

    
    }


  
   </div>



  )
}

export default Fetch