import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const state=useSelector(state=>state);
return(

  <nav>
    <ul className='left'>
        <li>
                <a href="">IndExpress</a>
        </li>
    </ul>
  
    <ul className='right'>
    
        <li>
            <a href="">
            <span className='shopingCart'> 💼</span>
            &emsp;
            <Link to='/basket'>
            <span className='cartCount'>{state.quantity}</span>
            </Link>
            </a>
        </li>
        
    </ul>
  </nav>
     

)
}

const Banner=()=>{

return(
    <>

    <div className="banner">

    <header>
    <div className='headerText'>
    <h1>Diwali murabak ho</h1>
    <p>Enjoy online shopping ind Express</p>
    </div>
    </header>
    </div>



    </>


)


}

export default Navbar
export {Banner}