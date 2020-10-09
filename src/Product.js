import React,{createContext,useContext,useState} from 'react'
import {Link} from 'react-router-dom'
import dslr from './dslr.jpg';
import tv from './tv.jpg';
import iphone from './iphone.jpg';
import headphone from './headphone.jpg';

export const Mycontext=createContext()
const ProductsContext=(props)=>{

    const products=[{

        id:1,name:'dslr',price:300,image:dslr,status:"hot"

    },
    {

        id:2,name:'tv',price:3000,image:tv,status:'new'

    },
    {

        id:3,name:'headphone',price:4000,image:headphone,status:'hot'

    },
    {

        id:4,name:'iphone',price:5000,image:iphone,status:"new"

    }


]

    return(

            <Mycontext.Provider value={products}>
                    <Compo></Compo>
                </Mycontext.Provider>
    )
}
export default ProductsContext


const Compo=()=>{


const content =useContext(Mycontext)

    return(
        <>
                
        <div className="products">
        
                    {content.map((item)=>{

                        return(

                            <>

                            <div className='product' key={item.id}>
                                    {item.status==='hot'?<div className='Hot'>Hot</div>:<div className='New'>New</div>}                    
                                   <div className='product-image'>
                                        <img src={item.image} style={{height:"200px",width:'200px'}}>
                                        </img>
                                    </div>
                                    <div className='product-details'>
                                                <div className='product-name'>
                                                {item.name}
                                            </div>   
                                            <div className='product-price'>
                                                    {item.price}
                                            </div>
                                    </div>    
                            
                                <div className='add-to-cart'>
                                        <Link to={
                                            
                                          {  pathname:`/cart/${item.id}`,
                                            data:item
                                          }
                                        } 
                                      
                                        style={{textDecoration:'none',color:'white'}}
                                        > product details</Link>
                                
                                </div>

                            </div>
                            
                            </>
                        )


                    })}
            </div>

            </>
        )
}

export {Compo}