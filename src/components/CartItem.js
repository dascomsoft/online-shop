
import React, { useContext} from 'react';
import { CartContext } from '../helpers/Context';
import "../styles/CartItem.css"


const CartItem = ({id,image,name,price}) => {

  const item ={id,image,name,price}

    const {addToCart,removeToCart}=useContext(CartContext);

     
   
      
      
 
    
  return (
    <div className='cartitem'>
        <img src={item.image} alt="" className='show' />
      <div className="description">
        <h3>{item.name}</h3>
        <p><b>${item.price}</b></p>
    
       <button onClick={() =>addToCart(item)}>+</button>
        <p className='quantity-text'>{item.quantity}</p>
       <button onClick={()=>removeToCart(item)}>-</button>
       <button onClick={()=>removeToCart(item)} className="remove-button">Remove</button>
  </div>
</div>

 )
 
}

export default CartItem
