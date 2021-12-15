import React from 'react'
import * as ReactBootStrap from "react-bootstrap"



export default function Header() {
return (


<div  className='headernavbar'>


<ReactBootStrap.Navbar  expand="lg">
        
<ReactBootStrap.Container  >


<ReactBootStrap.Nav.Link  href="/"><h2 className='headergardentext'>Garden<h8 className="gardentextdot">.</h8></h2></ReactBootStrap.Nav.Link> 



<ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />

<ReactBootStrap.Navbar.Collapse  className="justify-content-end">


        <ReactBootStrap.Nav.Link  href="/about"><h4 className='headerabouttext'>about</h4></ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link  href="/contact"><h4 className='headercontacttext'> contact</h4></ReactBootStrap.Nav.Link>
     
</ReactBootStrap.Navbar.Collapse>


</ReactBootStrap.Container>
</ReactBootStrap.Navbar>
            
        </div>
    )
}
