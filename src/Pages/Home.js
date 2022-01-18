import React  from 'react'
import Header from "../Components/Header"
import Bottom from "../Components/Bottom"
import * as ReactBootStrap from "react-bootstrap"
import Appstorebutton from "./Icon/Appstorebutton.png"
import Googleplaybutton from "./Icon/Googleplaybutton.png"
import groceryimageone from "../Images/groceryimageone.jpg"
import yick from "../Images/yick.jpg"
import food from "../Images/food.jpg"
import Flower from "../Svg/Flower.svg"
import Blackstar from "../Svg/Blackstar.svg"
import Downpoint from "../Svg/Downpoint.svg"
import Orangeballwithdots from "../Svg/Orangeballwithdots.svg"
import Cactus from "../Svg/Cactus.svg"
import Greenpetal from "../Svg/Greenpetal.svg"
import mocktwo from "../Images/mocktwo.png"


import {BiPackage} from "react-icons/bi";
import {RiLeafLine} from "react-icons/ri";
import {TiThListOutline} from "react-icons/ti";

import {HiArrowRight} from "react-icons/hi";  

import { Helmet } from 'react-helmet-async'






export default function Home() {
return (
      
<div className="homepagediv" >
{/*
  <ReactBootStrap.Image
  alt="ban"
  src={oick}
  className='homepageimage'
  /> */}

{/*
<video
autoPlay
loop
style={{position:"absolute", width:"100%", height:"100%", objectFit:"cover", minHeight:"100%"}}
>

<source src={"https://c.stocksy.com/a/oCyH00/y2/4283010.mp4"} type="video/mp4" />

</video>*/}

<Helmet>
<title>Garden Grocery Store | Groceries At Your Doorstep</title>
<meta name="description" content="Shop Quality Groceries, Enjoy Varieties Of Grocery Boxes, Create Grocery Lists & Have It Delivered Anytime And Anyday. Download The App & Get Started." />
<link rel="canonical" href="https://www.gardengrocerystore.com/" />
<head>Groceries Near Me</head>
<body>
The Best Grocery Delivery Near Me
Your Favorite Grocery Store
We Sell A Variety Of Fresh Groceries.
Garden Grocery Store
Groceries Delivered.
Vegetables, Fruit, Grocery Boxes.
Best Place for Grocery Shopping in Lagos.
</body>
</Helmet>


<Header/>


<ReactBootStrap.Row> 
<ReactBootStrap.Col sm={8}>

<img 
className='topflower'
src={Flower}
alt="d"
/>

<h1 className="homepagetitle">Groceries<br/>  At Your<br/> Doorstep<h7 style={{color:"orange"}}>.</h7></h1>

<h2 className='homepagenexttitle' >Download the App & Start Shopping.</h2>
</ReactBootStrap.Col>


<ReactBootStrap.Col sm={4}>

{/*
<ReactBootStrap.Image
style={{width:530, height:550, position:"absolute", marginTop:20, marginLeft:17}}
src={husha}
alt="page"
/> */}



<div className='downloadbuttonrow'  >

<a href="https://react-bootstrap.github.io/layout/grid/" target= "blank">
<img

style={{width:140, height:149, margin:3, position:"relative"}} 
src={Appstorebutton}
alt="b"
/>
</a>

<a href="https://www.stocksy.com/370511/fresh-picked-peaches-being-washed-in-a-metal-sink" target= "blank">
<img
style={{width:140, height:149, margin:3, position:"relative"}} 
src={Googleplaybutton}
alt="y"
/>
</a>

</div>
 

<h3 className="homepagesubtitle">Shop Quality Groceries, Enjoy Varieties Of Grocery Boxes, Create Grocery Lists & Have It Delivered Anytime And Anyday. Download The App & Get Started. </h3> 

 <p className='homepageaftersub'>Welcome to the official Garden grocery store website.  
 Download the app and enjoy quality produce, grocery boxes, personal grocery-lists and quick delivery. For more information or suggestions feel free to contact us.</p> 

 <h4 className='homepageyear' style={{fontFamily:"RecoletaBold"}}>©2021</h4>


</ReactBootStrap.Col>

</ReactBootStrap.Row>

{/*
<img 
style={{position:"absolute", width:"92%",marginTop:50, height:"95%" }}
 src={landom}
  alt="d"
/>*/}


<img 
className='green'
 src={Orangeballwithdots}
  alt="d"
/>

<img 
className='flowertwo'
 src={Flower}
  alt="d"
/>

<img 
className='lagosbling'
 src={Cactus}
  alt="d"
/>


<img 
className='firstblackstar'
 src={Blackstar}
  alt="d"
/>

<p className='lagostext'>Garden Is Now<br/> Available In Lagos,<br/> Nigeria.</p>
{/*
<img
style={{position:"absolute", marginLeft:190, marginTop:140, width:230}}
 src={Orangebend}
 alt="e"
/> */}


<ReactBootStrap.Row >

<ReactBootStrap.Col xs={11} md={5}>
<h3 className='availabletext' >Available for IOS &<br/> Android.</h3>
<p className='availablesub' >Download the app & begin enjoying quality groceries, take the stress off and 
create a grocerylist for Wednesday while working on a Monday morning. Relax and enjoy. </p>


<div className='lastbuttonrow' >

<a href="https://react-bootstrap.github.io/layout/grid/" target= "blank">
<img
style={{width:140, height:149, margin:3}} 
src={Appstorebutton}
alt="b"
/>
</a>


<a href="https://react-bootstrap.github.io/layout/grid/" target= "blank">
<img
style={{width:140, height:149, margin:3}} 
src={Googleplaybutton}
alt="y"
/>
</a>

</div> 

</ReactBootStrap.Col> 


<ReactBootStrap.Col xs={7} md={6}>


<img
className='groceryimageone'
src={mocktwo}
alt="page"
/>

 
</ReactBootStrap.Col>

</ReactBootStrap.Row>


<h4 className='textunder' >Hey There<h8 style={{color:"orange"}}>.</h8></h4>


<div style={{border:30}}>
<h5 className='textunderunder'>
Did you know it costs just ₦1000 to have your groceries delivered <br className='break'/> anywhere in Lagos?
 And you could create Your own grocery list? <br className='break'/>
Also have it delivered on any day of your choosing even at work.

</h5>

<h6 className='textunderfinal'>Imagine a box full of ingredients for egusi soup or just<br className='break'/> fresh bread and a cup of freshly squeezed juice at your office.</h6>
</div>


<img 
className='secondblackstar'
style={{}}
 src={Blackstar}
  alt="d"
/>

<ReactBootStrap.Row  >
<ReactBootStrap.Col >

<img
className='groceryimagetwo'
src={yick}
alt="v"
/>

</ReactBootStrap.Col>



<ReactBootStrap.Col >

  <h3 className='whygarden' >Why Garden?</h3>

 <h5 className='deliverytext'> <BiPackage className='deliveryicon'  /> Quick Delivery</h5>

 <h5 className='qualitytext' > <RiLeafLine className='qualityicon'  /> Quality Products</h5>

 <h5 className='listtext'> <TiThListOutline className='listicon'/> Create Grocery Lists</h5>
</ReactBootStrap.Col>

</ReactBootStrap.Row>




<ReactBootStrap.Row >

<ReactBootStrap.Col xs={4} md={4}>
<h3 className='productcategories' >Fruits</h3>
</ReactBootStrap.Col>

<ReactBootStrap.Col xs={4} md={4}>
<h3 className='productcategories'>Vegetables</h3>
</ReactBootStrap.Col>

<ReactBootStrap.Col xs={4} md={4}>
<h3 className='productcategories'>Meat & Seafood</h3>
</ReactBootStrap.Col>

</ReactBootStrap.Row>

<hr className='categorylineup'/>


<ReactBootStrap.Row >
<ReactBootStrap.Col xs={4} md={4}>
<h3 className='productcategories' >Bread & Bakery</h3>
</ReactBootStrap.Col>

<ReactBootStrap.Col xs={4} md={4}>
<h3 className='productcategories'>Dairy & Eggs</h3>
</ReactBootStrap.Col>

<ReactBootStrap.Col xs={4} md={4}>
<h3 className='productcategories'>Drinks</h3>
</ReactBootStrap.Col>

</ReactBootStrap.Row>

<hr className='categorylineup'/>



<ReactBootStrap.Row >

<ReactBootStrap.Col xs={4} md={4}>
<h3 className='productcategories'>Spices, Sauces & Oil</h3>
</ReactBootStrap.Col>

<ReactBootStrap.Col xs={4} md={4}>
<h3 className='productcategories'>Pasta, Noodles & Grains</h3>
</ReactBootStrap.Col>

<ReactBootStrap.Col xs={4} md={4}>
<h3 className='productcategories'>Dried, Pantry & Tubers</h3>
</ReactBootStrap.Col>

</ReactBootStrap.Row>

<hr className='categoriesline'/>




<ReactBootStrap.Row >

<ReactBootStrap.Col>
<img
className='downarrow'
style={{}}
src={Downpoint}
alt="w"
/>

<h2 className='subscribetext' >Subscribe to our<br/>newsletter to stay in<br/>touch with the latest.</h2>

<div style={{flexDirection:"row"}}>
<input type="email" name="Email Address" placeholder='Email Address'  containerStyle={{backgroundColor:"transparent"}} style={{backgroundColor:"transparent"}} className='placeholder' />
<HiArrowRight className='arrowright' />

</div>

<hr className='placeholderline' />

</ReactBootStrap.Col>



<ReactBootStrap.Col>

<img 
className='thirdblackstar'
style={{}}
 src={Blackstar}
  alt="d"
/>

<ReactBootStrap.Image
className='groceryimagethree'
         
         src={food}
         alt="page"
         />

</ReactBootStrap.Col>


</ReactBootStrap.Row>


<Bottom/>







        </div>
    )
}
