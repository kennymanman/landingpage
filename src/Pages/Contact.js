import React from 'react'
import Header from "../Components/Header"
import * as ReactBootStrap from "react-bootstrap"
import Bottom from "../Components/Bottom"

import { Helmet } from 'react-helmet-async'


export default function Contact() {
return (


<div className='contactpagediv'>

<Helmet>

<title>Contact - Garden Grocery Store.</title>
<meta name="description" content="Address: 92, Lanre Awolokun Gbagada Phase 2, Lagos.
Instagram: @Gardengrocerystore
Twitter: @Gardengroceryng
"
/>

<link rel="canonical" href="https://www.gardengrocerystore.com/contact" />

<head>We Would Love To Hear From You</head>
<meta keywords="Lagos, Nigeria, Shopping, Jumia, Affordable, Groceries" />

</Helmet>

<Header/>

<ReactBootStrap.Row>
<ReactBootStrap.Col>
<h1 className='contacttitle' >Get In<br/>Touch.</h1>


<h3 ><a className='contactemail'  href='mailto:hello@gardengrocerystore.com'>hello@gardengrocerystore.com</a></h3>

<hr className='emailline' />
</ReactBootStrap.Col>

<ReactBootStrap.Col>

<p className='caretext'>We Care About You & Would Love<br/> To Hear From You.</p>

<p className='contactaddress'>92, Lanre Awolokun Gbagada<br/>Phase 2, Lagos.</p>


<h3 className='contactinstagram' ><a style={{textDecoration:"none", color:"black"}} href="https://www.instagram.com/gardengrocerystore/?hl=en" target= "blank">Instagram</a></h3>

<h3 className='contacttwitter'><a  style={{textDecoration:"none", color:"black"}}href="https://twitter.com/Gardengroceryng" target= "blank">Twitter</a></h3>

<h3 className='contactfacebook'><a style={{textDecoration:"none", color:"black"}} href="https://react-bootstrap.github.io/layout/grid/" target= "blank">Facebook</a></h3>

           </ReactBootStrap.Col>

           </ReactBootStrap.Row>

           <Bottom/>
        </div>
    )
}
