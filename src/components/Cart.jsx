import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {Card, Button} from "react-bootstrap"
import { useEffect } from 'react';
import { remove } from '../store/CartSlice';
const Cart = () => {

  const dispatch = useDispatch();


  const removeProduct=(cartItemId)=>{
    dispatch(remove(cartItemId))
  }


  const products= useSelector(state=> state.cart);
  
  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);


    const cards= products.map(product=>(
    <div className='col-md-12' style={{marginBottom:"10px", display:"flex", justifyContent:"center"}}  key={product.cartItemId}>
        <Card  style={{ width: '18rem', height: '100%' }} key={product.cartItemId} className='h-100'>
          <div className="text-center">
          <Card.Img variant='top' src={product.image} style={{ width: '150px', height: '150px', objectFit: 'contain' }}/>
  
          </div>
          
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    
    <Card.Text>
     {`₹${product.price}`}
    </Card.Text>
    
   
  </Card.Body>
  <Card.Footer  style={{background:"white"}}>
  
  <Button style={{
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius:'10px',
              padding: '10px 20px',
              cursor: 'pointer',
            }} variant='primary' onClick={()=> removeProduct(product.cartItemId)}>Remove Item</Button>
  </Card.Footer>
  </Card>
    </div>
  
  ))

  return (
    <div className='row' style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      margin: '10px',
      alignItems: 'stretch',
      justifyContent: 'center',
      marginTop: '20px',
    }}>
      {cards}
    </div>
  )
}

export default Cart
