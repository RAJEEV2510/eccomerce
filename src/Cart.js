import React from 'react';
import './App.css';
import {useDispatch} from 'react-redux'

const Cart = (props) => {

console.log(props.location.data)
const dispatch=useDispatch();
const item=props.location.data
return(
  <div className="container">
    <div className='product-imgae'>
    <img className='image-product' src={item.image}></img>

    </div>
  
    <div className='product-detailss'>
        <div className='details'>
        <h1>Product Details</h1>
        <br>
        </br><br></br>
            <ul style={{listStyleType:'none'}}>
              <li>
              <h3>
            {item.name}
                </h3>
              </li>
              <li>
              <h4></h4>
              Price   {item.price}
              </li>
              <li>
              <h4>
              Status  {item.status}
              </h4>
              </li>
            </ul>
        </div>

        <div className='cart-button'>
             <button className='add-cart-button' onClick={ ()=>{ 
               alert('your product has been into cart')
               dispatch({type:'ADD_TO_CART',payload:item})}}>Add to cart</button>
        </div>
    </div>
  </div>
)
}

export default Cart