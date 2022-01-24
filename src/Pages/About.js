import React from 'react'
import Header from "../Components/Header"
import * as ReactBootStrap from "react-bootstrap"
import Center from "../Svg/Center.svg"
import Blackstar from "../Svg/Blackstar.svg"
import foodhun from "../Images/foodhun.jpg"
import Bottom from "../Components/Bottom"

import { Helmet } from 'react-helmet-async'



export default function About() {
return (

<div className='aboutpagediv'>

    <Helmet>
        <title>About - Garden Grocery Store</title>
        <meta name="description" content="All You Need For Your Grocery Shopping. Fresh Groceries At Affordable Prices Near You, Only At Garden Grocery Store. Garden Launched 2022." />

<link rel="canonical" href="https://www.gardengrocerystore.com/about" />
<head>Garden Groceries Near Me</head>
<body>
The Best Grocery Delivery Near Me
Your Favorite Grocery Store
Garden Grocery Store
Groceries Delivered.
Download The App And Get Fresh Groceries
Best Place for Grocery Shopping in Lagos.
</body>
    </Helmet>
<Header />
          
<ReactBootStrap.Row>
<ReactBootStrap.Col sm={6} >

<img
className='centersvg' 
src={Center}
alt="d"
/>

<h1 className='aboutustitle'>About Us</h1> 

<h2 className='gardenstory' >The Garden Story.</h2>


<h7 className="doorstep">Groceries At Your Doorstep</h7>

<p className='better' >Live The Better Life, It's Worth It.</p>
</ReactBootStrap.Col>



<ReactBootStrap.Col sm={6} >

<p className='info' >Our startup Garden was founded in 2020. Garden was created to provide quality groceries, variety of products and accessibility to these groceries to our customers.
 During the pandemic alot of families couldn't gain access to quality groceries and at the time where one's daily food intake was important to protect their health. With the Garden app you can now order quality products,
 make your own personalized grocery list and enjoy varieties of grocery boxes. For how you can recommend better solutions feel free to contact us.</p> 

<h4 className='subinfo' >We would love to hear from you.</h4>

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


<h3 className='ceoname' >Brian El.<br/>CEO of Garden.</h3>
</ReactBootStrap.Col>
</ReactBootStrap.Row>

<Bottom/>
        </div>
    )
}
