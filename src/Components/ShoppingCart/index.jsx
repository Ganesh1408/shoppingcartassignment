import React, { useState } from 'react'
import {Products} from '../../Data'


import {GlobalStyles,ProductsListContainer,ProductContainer,ProductHeader,ShoppingCartContainer,ShoppingCartHeader,Product,ProductPrice,Button} from './styledComponents'
import CartSummary from '../CartSummary'
import CartItems from '../CartItems';
import FreeItem from '../FreeItem';


function ShoppingCart() {
    // const [price,setPrice] = useState(0);
    const [cartItems,setCartItems] = useState([]);
    const addToCart=(product)=>{
        setCartItems((prevItems)=>{
            const existingItem = prevItems.find((item)=>item.id === product.id)
            if(existingItem){
                return prevItems.map((item)=>(
                    item.id === product.id ? {...existingItem,quantity:existingItem.quantity+1}:item
                ))
            }
             return [...prevItems,{...product,quantity:1}]
        })
        
    }

    console.log(cartItems)
    const totalPrice = cartItems.reduce((accumulator,currVal)=>accumulator+currVal.price*currVal.quantity,0)
    
  return (
    <>
    <GlobalStyles/>
    <ShoppingCartContainer >
        <ShoppingCartHeader>Shopping Cart App</ShoppingCartHeader>
        <Product>Products</Product>
    <ProductsListContainer>
       {Products.map((product)=>(
        <ProductContainer key={product.id}>
          <ProductHeader>{product.name}</ProductHeader>
          <ProductPrice>₹{product.price}</ProductPrice>
          <Button onClick={()=>{addToCart(product)}}>Add to Cart</Button>
        </ProductContainer>
  ))}
  </ProductsListContainer>
      <CartSummary  totalPrice ={totalPrice}/>
      <CartItems cartItems={cartItems} setCartItems={setCartItems}/>
      {totalPrice === 1000 && <FreeItem cartItems={cartItems}/>}
    </ShoppingCartContainer>
    </>
  )
 
}

export default ShoppingCart
