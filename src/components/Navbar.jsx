import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import React from 'react'

const Navbar1 = () => {

  const cartProducts = useSelector(state=> state.cart);
  return (
    <Navbar expand="lg" bg="light" fixed='top'>
      <Container fluid>
        <Navbar.Brand href="#">E-Commerce Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
       <Nav className="me-auto">
            <Nav.Link to='/' as={Link}>Products</Nav.Link>
            
            
          </Nav>

          <Navbar.Toggle/>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              <div className="cart" style={{display:"flex", gap:"5px", justifyContent:"center", alignItems:"center", margin:'5px'}}>
              <Nav.Link  to='/cart' as={Link}>My Bag</Nav.Link>
              <div className="number" style={{display:"flex", alignItems:"center", justifyContent:"center", background:"purple", border:'0.5px solid white', borderRadius:"50%", width:"29px", height:"29px"}}>
                <div style={{fontWeight:"bold", color:"white"}}>{cartProducts.length}</div>
              
              </div>
              </div>
              
            </Navbar.Text>
          </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
  
}

export default Navbar1
