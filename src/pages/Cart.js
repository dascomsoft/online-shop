 
import React, { useContext} from 'react'
import { CartContext } from '../helpers/Context'
import "../styles/Cart.css";
import {Link} from "react-router-dom"


//Cart function
const Cart = () => {
 

 const {cartItems,addToCart,removeToCart,clear}=useContext(CartContext);

 const totalPrice = cartItems.reduce((price,item) => price + item.quantity *item.price,0)

 if(cartItems.length===0){
  return <h3 className='cart-center text-danger display-5 mt-5 text-center
  '>Oup's Cart Products Empty!!!</h3>
 }
  
  return (
    <div className="cart">
     <div className="container">
     <div className="cart-content">
      {cartItems.map((item) =>( 
           <div className="display-container" key={item.id}>
               <img src={item.image} alt="" className='cartImage' />
                <h5 className='fs-5'>{item.name}</h5>
                <p>
                 <button className='increase-card' onClick={() =>addToCart(item)}>+</button>
                 <button className='decrease-card' onClick={() =>removeToCart(item)}>-</button>
              </p>
              <p className='fs-5'>{item.quantity} *${item.price}</p>
             
       </div>


      ))}
         <div className="different-button">
             <h6 className='fs-3 text-center'>TOTAL PRICE : <b>${totalPrice}</b></h6>
             <button className='clear-button mb-5 fw-bold' onClick={clear}>Clear the Cart</button>
        </div>
    </div>
    </div>


   </div>

    ) 
}

export default Cart

