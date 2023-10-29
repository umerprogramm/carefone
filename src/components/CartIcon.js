import React from 'react'

export default function CartIcon ({ count }) {

  return (
        <div>
       <img  src='https://img.icons8.com/material-outlined/256/shopping-cart.png' style={{width : 40 , height : 40 , marginTop : "-3px"}}/>
       <span style={{marginTop : "-10px",marginLeft : "15px",position : 'absolute', top :'0%',backgroundColor : '#154c79' ,height : '26px' , width : "26px" ,borderRadius : "50%",fontWeight : 'bolder' , color:'white', textAlign : 'center'}}>{count}</span>
    </div>
  
  )
}
