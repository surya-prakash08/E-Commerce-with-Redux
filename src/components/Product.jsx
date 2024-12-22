import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';
import { Alert } from 'react-bootstrap';

import { getProducts } from '../store/productSlice';
const Product = () => {
  const dispatch = useDispatch();
  const {data:products, status} = useSelector(state=> state.products);

    

    useEffect(() => {

      dispatch(getProducts())

      //dispatch an action for fetchProducts


      // fetch("https://fakestoreapi.com/products")
      // .then(data=> data.json())
      // .then(result=>setProducts(result))

      
     
    }, [])

    if(status==='Loading'){
      return <p>Loading...</p>
    }
    if(status==='error'){
      return (
        <Alert key='danger' variant='danger'>
        Something went Wrong! Try Again later!
        </Alert>
      )
    }
    
    
    const addToCart=(product)=>{
      //dspatch an add action
      dispatch(add(product))
    }
    
    const cards= products?.map(product=>(
      <div className='col-md-3' style={{marginBottom:"10px"}}  key={product.id}>
          <Card  style={{ width: '18rem', height: '100%' }} key={product.id} className='h-100'>
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
    
    <button style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius:'10px',
                padding: '10px 20px',
                cursor: 'pointer',
              }} variant='primary' onClick={()=> addToCart(product)}>Add to cart</button>
    </Card.Footer>
    </Card>
      </div>
    
    ))
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className='row'>
        {cards}
      </div>
    </div>
  )
}

export default Product
