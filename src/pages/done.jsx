import React from 'react'
import { useRouter } from 'next/router'

export default function Done() {
  
  const router = useRouter()

  return (
    <>
        <div style={{color : 'white' ,fontSize : "30px" ,fontWeight : 800, display : 'flex' ,
     justifyContent : 'center',
     alignItems : 'center',
     height : '100vh',
     backgroundColor:'#1035a3',
     flexDirection : 'column'
     }}>
      <p>      
        Your Order has been placed We contact us soon
</p>
   
      <button  onClick={()=>router.push('/')} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
 </div>


    </>

  )
}
