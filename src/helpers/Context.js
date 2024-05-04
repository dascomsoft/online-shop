   
   
   import { createContext, useState } from "react"; 



    export const CartContext = createContext()

   export const CartProvider = (props) =>{ 

   const[cartItems,setCartItems] = useState([]);

   // Add function cart
  const addToCart =(product)=>{

    //Check if item is already in the Cart
  const ProductExist = cartItems.find((item) => item.id===product.id);
    // If item already in the cart then update the quantity of the existingItem
  if(ProductExist){
    setCartItems(
    cartItems.map((item) => item.id===product.id ? {...ProductExist , quantity: ProductExist.quantity + 1 } : item))

       }

         else{
              setCartItems([...cartItems, {...product, quantity : 1 }])
         }
      }

   //Remove function cart
   const removeToCart =(product)=>{
          //Check if item is already in the Cart
      const ProductExist = cartItems.find(item => item.id===product.id);
              // If item already in the cart then update the quantity of the existingItem
         if(ProductExist.quantity===1){
           setCartItems(cartItems.filter((item) => item.id !== product.id))
         }

           else{
            setCartItems(cartItems.map( item => item.id===product.id ? {...ProductExist , quantity : ProductExist.quantity -1 } :item))
          }
   }

   //Clear function
   const clear =()=>{
    setCartItems([])
   }

  
   
   const contextValue ={cartItems,addToCart,removeToCart,clear}
   
   return(
        <CartContext.Provider value ={contextValue}>
             {props.children}
        </CartContext.Provider>
    )
}