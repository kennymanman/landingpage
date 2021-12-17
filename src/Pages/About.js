import React from 'react'
import Header from "../Components/Header"
import * as ReactBootStrap from "react-bootstrap"
import Center from "../Svg/Center.svg"
import Blackstar from "../Svg/Blackstar.svg"
import foodhun from "../Images/foodhun.jpg"
import Bottom from "../Components/Bottom"




export default function About() {
return (

<div className='aboutpagediv'>
<Header />
          
<ReactBootStrap.Row>
<ReactBootStrap.Col sm={6} >

<img
className='centersvg' 
src={Center}
alt="d"
/>

<h1 className='aboutustitle'>About Us</h1> 

<h3 className='gardenstory' >The Garden Story.</h3>


<h7 className="doorstep">Groceries At Your Doorstep</h7>

<p className='better' >Live The Better Life, It's Worth It.</p>
</ReactBootStrap.Col>



<ReactBootStrap.Col sm={6} >

<p className='info' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 

<h5 className='subinfo' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>

<img
className='aboutstar' 
src={Blackstar}
alt="d"
/>

</ReactBootStrap.Col>
</ReactBootStrap.Row>

<hr className='abouthorizontal' />

<ReactBootStrap.Row>

<ReactBootStrap.Col>





<h2 className='foundertitle'>Meet Our<br/> Founder.</h2>
</ReactBootStrap.Col>

<ReactBootStrap.Col>

<img 
className='nextaboutstar'
src={Blackstar}
alt="d"
/>


<img 
className='ceoimage'
src={foodhun}
alt="d"
/>


<h3 className='ceoname' >Okafor Ekene.<br/>CEO of Garden.</h3>
</ReactBootStrap.Col>
</ReactBootStrap.Row>

<Bottom/>
        </div>
    )
}
