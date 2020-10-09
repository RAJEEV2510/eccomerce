import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import "./App.css"
const Basket = () => {
    const handletoken=(token)=>{
console.log(token)

dispatch({type:"cartEmpty"})
    }
    const dispatch=useDispatch();
    const state=useSelector(state=>state);
    const {shopingCart,totalprice,quantity} =state
return(
    <>
    <div className='cart-details' style={{marginTop:'100px'}}>
                 {shopingCart.length>0?
                      shopingCart.map((item)=>{
                          return(
                                <>
                                <div className='cart' key={item.id} >
                                    <div className='cart-image'> <img src={item.image}></img></div>
                                    <div className='cart-name'>{item.name}</div>
                                    <div className='cart-price'>{item.price}</div>
                                    <div className='increase' onClick={()=>{dispatch({type:'Increament',payload:item})}}> + </div>
                                    <div className='decrease' onClick={()=>{dispatch({type:'Decreament',payload:item})}}>-</div>
                                    <div className='product-quantity'>{item.qty}</div>
                                    <div className='delete' onClick={()=>{dispatch({type:'delete',payload:item})}}>  ✂️</div>
                                </div>
                                </>

                                )
        })
        
        :<h1 style={{marginLeft:"40px"}}> No Product Has been add in your shoping cart
       
        </h1>}

        </div>

        <div className='cart-summary'>
        <h1>Summary Cart</h1>
        <br>
        </br>
        <br></br>
        {shopingCart.length>0?<>
                <div className='total-items' >
                   <div className='items'>
                     <h2 style={{fontFamily:'cursive'}}> Total Items </h2>                    
                    </div> 
                    <div className='quantity'>
                     <h2>  {quantity} </h2>
                    </div> 
                </div>
                    <br></br>
                <div className='total-price'>
                    <h2>Total Price</h2>
                    <div className='price'>
                       <h2> {totalprice}</h2>
                </div>
                </div>
                <br></br>
                    <div className="checkout-summary">
                    <StripeCheckout 
                    currency='in'
                    stripeKey="pk_test_51HaOvHKVTNgN3wwN8h929z1CESluRFEugOv97FgYH8gZjEL2Ei5u6ZnAMn80XjYkWmYd2PA9SHgZunAYzAq7VueQ00ZunZ5LgI"
                    token={handletoken}
                    billingAddress
                    shippingAddress
                    amount={totalprice*100}
                    name='all products'
                    >
                    
                    
                    </StripeCheckout>
                 
                    </div>
            
            </>:""}
        </div>
      

        </>
)
} 

export default Basket