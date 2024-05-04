
import React, { useContext } from 'react';
import { CartContext } from '../helpers/Context';



    function Product({id,image,name,price}) {

      const product ={id,image,name,price}
      
      const{addToCart} =useContext(CartContext);

    

    

 return (
  <div className='product'>
     <img src={image} alt="" />
     <h3>{name}</h3>
     <h4>${price}</h4>
     <button onClick={()=>addToCart(product)}>ADD TO CART</button>
</div>
  )
}

export default Product
