import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Center from "../Svg/Center.svg"
import {FaCcMastercard} from "react-icons/fa"; 
import {RiVisaLine} from "react-icons/ri";
import {MdRecycling} from "react-icons/md";
import Flutterwave from "../Pages/Icon/Flutterwave.png"


export default function Bottom() {
    return (
        <div>

<hr className="bottomhorizontalline"/>

<ReactBootStrap.Row >

  <ReactBootStrap.Col sm={6}>

 {/*    
<img
src={Center}
alt="e"
style={{position:"absolute", width:300}}
/>*/}


<h2 className="bottomgardentext"  style={{fontFamily:"RecoletaBold"}}>Garden<h8 className="bottomgardenbutton" >.</h8></h2>
  </ReactBootStrap.Col>

  <ReactBootStrap.Col sm={2}>
      <h2 className='instagram' > <a style={{textDecoration:"none", color:"black"}} href="https://react-bootstrap.github.io/layout/grid/" target= "blank">Instagram</a></h2>
  </ReactBootStrap.Col>

  <ReactBootStrap.Col sm={2}>
      <h2 className='twitter'><a style={{textDecoration:"none", color:"black"}} href="https://react-bootstrap.github.io/layout/grid/" target= "blank">Twitter</a></h2>

      <p className='address' >92, Lanre Awolokun<br/>
Gbagada Phase, 2<br/>
Lagos.
</p>
  </ReactBootStrap.Col>

  <ReactBootStrap.Col sm={2}>
      <h2 className='facebook'>Facebook</h2>

      
<p className='phonenumber' >+234 904 567 5432</p>  
<hr/>
<p className='email' ><a style={{color:"black", textDecoration:"none"}} href='mailto:gardenstoreapp@gmail.com' target= "blank">info@gardensupport.com</a></p>
<hr className='nextbottomhorizontalline'/>
  </ReactBootStrap.Col>
</ReactBootStrap.Row>



<ReactBootStrap.Row >

<ReactBootStrap.Col >

<FaCcMastercard className='mastercard'  />
<RiVisaLine className='visa' />

<img
className='flutterwave'
src={Flutterwave}
alt="e"
style={{maxWidth:100}}
/>



</ReactBootStrap.Col>



<ReactBootStrap.Col>
<p className='copyright' >Copyright©Gardengrocery</p>
    
</ReactBootStrap.Col>



<ReactBootStrap.Col>

<p className='earthgreen' >Keep Earth Green. <MdRecycling className='recycleicon' /></p> 
</ReactBootStrap.Col>



</ReactBootStrap.Row>





            
        </div>
    )
}
