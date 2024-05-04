import React from 'react';
import { ProductLists }  from '../helpers/ProductLists';
import "../styles/Products.css";
import  { useContext } from 'react';
import { CartContext } from '../helpers/Context';
import {Link} from "react-router-dom"



function Products() {

  const{addToCart} =useContext(CartContext)

  return (
    <div className='products'>
       
      <h2 className='product-title'>Our Products Lists</h2>
      <div className="container">
       <div className='products-container'>
           {ProductLists.map((product) => (
        <div className="display-products" key={product.id}>
            <div className="image-item">
                <img src={product.image} alt=""  className='product-image'/>
             </div>
            <div className="desc">
              <p>{product.name}</p>
              <p><b>${product.price}</b></p>
            </div>
            <div className="ratings-product">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              </div>
            <div className="cartButton">
                <button className='addButton' onClick={() =>addToCart(product)}>Add To Cart</button>

            </div>
           </div>

         ))}
     </div>
  </div>




  <div class="footer-container">
    <div class="container">
      <div class="footer-content">
        <div class="link">
          <h3>USEFUL LINKS</h3>
          <p><a href="/">Home</a></p>
          <p><a href ="/About">About</a></p>
          <p><a href ="/Products">Products</a></p>
          <p><a href="/Contact">Contact</a></p>
        </div>
       

        <div class="link">
          <h3>SOCIAL MEDIA</h3>
           <p>Follow us on social media</p>
           <div class="icons">
                  <span>
                      <svg fill="orange" width="20px" height="20px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-facebook"><path d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' /></svg>
                  </span>
                  <span>
                      <svg fill="orange" width="20px" height="20px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-instagram"><path d='M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z'/><path d='M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z'/><circle cx='15.156' cy='4.858' r='1.237'/></svg>
                  </span>
                  <span>
                      <svg  fill="orange" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/></svg>
                  </span>
                  <span>
                      <svg  width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="orange"><path fill="orange" fill-rule="evenodd" d="M13.478 3.399c.6.161 1.072.634 1.234 1.234C15 5.728 15 8 15 8s0 2.272-.288 3.367a1.754 1.754 0 01-1.234 1.234C12.382 12.89 8 12.89 8 12.89s-4.382 0-5.478-.289a1.754 1.754 0 01-1.234-1.234C1 10.283 1 8 1 8s0-2.272.288-3.367c.162-.6.635-1.073 1.234-1.234C3.618 3.11 8 3.11 8 3.11s4.382 0 5.478.289zm-3.24 4.612l-3.645 2.1V5.9l3.644 2.11z" clip-rule="evenodd"/></svg>
                  </span>
                  </div> 
             </div>

        <div class="link">
          <h3>CONTACT</h3>
          <div class="d-flex">
            <p>
              <svg fill="orange" width="20px" height="20px" viewBox="-3 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g id="Group_31" data-name="Group 31" transform="translate(-241.002 -321.05)">
                  <path id="Path_296" data-name="Path 296" d="M267,349.05v-24a4,4,0,0,0-4-4H245a4,4,0,0,0-4,4v24a4,4,0,0,0,4,4h18A4,4,0,0,0,267,349.05Zm-22,0v-24h18v24Z"/>
                  <rect id="Rectangle_6" data-name="Rectangle 6" width="10" height="12" transform="translate(249.002 329.05)"/>
                  <rect id="Rectangle_7" data-name="Rectangle 7" width="18" height="4" transform="translate(245.002 345.05)"/>
                </g>
              </svg>
            </p>
          <p class="ms-2">Tel:+1(65)-569-47-67</p>
        </div>
          <div class="d-flex">
            <p>
              <svg fill="orange" width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>mail</title><path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" /></svg>
            
            </p>
          <p class="ms-2">Email: kikstore@store.com</p>
          </div>
          <div class="d-flex">
            <p>
            <svg fill="orange" width="20px" height="20px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z"/></svg>
           
            </p>
          <p class="ms-2">99 Belgocity street ,NY-USA</p>
        </div>
        </div>
      </div>
      <p class="text-center text-warning mt-5 fw-bold">&copy;Copyright , 2024 DASCOM Ltd</p>

    </div>
  </div>



  

 </div>    
  )
}

export default Products
