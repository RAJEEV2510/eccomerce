const initialState={

    shopingCart:[],
    totalprice:0,
    quantity:0,
    
}
const reducer=(state=initialState,action)=>{

    let product ;
    let index;
    let updatedPrice;
    let upadatedQty;
    let shoping=[];
    
    switch(action.type)
    {
        case 'ADD_TO_CART':
            const check=state.shopingCart.find((product)=>{

                return product.id===action.payload.id
            })            
            
            if(check)
            {
                return state
            }
            else
            {
            
                product=action.payload;
                product['qty']=1;
                upadatedQty=state.quantity+1;
                console.log(product.price,state.totalprice)
                updatedPrice=state.totalprice+product.price;
                
                return {
                    totalprice:updatedPrice,quantity:upadatedQty,shopingCart:[product,...state.shopingCart]
                }


            }
                      
            break;
        case "Increament":
         product=action.payload;
         product.qty=product.qty+1;
         updatedPrice=state.totalprice+product.price;
         upadatedQty=state.quantity+1;   
         index=state.shopingCart.findIndex(cart=>product.id===cart.id);
         state.shopingCart[index]=product;
         return({
             totalprice:updatedPrice,quantity:upadatedQty,shopingCart:[...state.shopingCart]
         })
         


            break;
        case "Decreament":

         product=action.payload;
         if(product.qty>1)
         {
            product.qty=product.qty-1;
            updatedPrice=state.totalprice-product.price;
            upadatedQty=state.quantity-1;   
         index=state.shopingCart.findIndex(cart=>product.id===cart.id);
         state.shopingCart[index]=product;
         return({
             totalprice:updatedPrice,quantity:upadatedQty,shopingCart:[...state.shopingCart]
            })

         }
         else
         {
             return state;
         }


            break;
            
        case 'delete':
            product =action.payload;
            upadatedQty=state.quantity-product.qty;
            updatedPrice=state.totalprice-product.qty*product.price;
            shoping=state.shopingCart.filter((cart)=>{
              return  cart.id!=product.id

            })
            return {
                totalprice:updatedPrice,quantity:upadatedQty,shopingCart:shoping
            }


            break;    
        case "cartEmpty":
            return initialState;
            break;    
         default:
             return {...state}
             break;   
        }
}
export default reducer;


