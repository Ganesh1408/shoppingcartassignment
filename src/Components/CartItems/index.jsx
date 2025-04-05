import React from 'react'
import { CartItemsContainer, CartItemsHeading,GlobalStyle,ReduceButton,IncreaseButton,Quantity,CartItemName,CartItemQuan,EmptyCartContainer,EmptyCartHeading,EmptyCartDescription } from './styledComponents'

function CartItems({cartItems,setCartItems}) {
  console.log(cartItems)
  // const [quantity,setQuantity] = useState(1);
  
  console.log(cartItems)
  
  return (
    <>
    <GlobalStyle/>
      <CartItemsHeading>CartItems</CartItemsHeading>
      
      {cartItems.length ===0 ?(
        <EmptyCartContainer >
        <EmptyCartHeading>Your cart is Empty</EmptyCartHeading>
        <EmptyCartDescription>Add something to see them here</EmptyCartDescription>
        </EmptyCartContainer>
      ):(
        cartItems.map((item)=>(
      <CartItemsContainer  key={item.id}>
      
          <div  >
            <CartItemName>{item.name}</CartItemName>
            <CartItemQuan>₹{item.price} x {item.quantity} ={item.price*item.quantity} </CartItemQuan>
          </div>
        
        
        <div>
        <ReduceButton onClick={()=>setCartItems((prev)=>prev.map((i)=>i.id === item.id ? {...i,quantity:i.quantity-1}:i).filter((i)=>i.quantity>0))}>-</ReduceButton>
        <Quantity>{item.quantity}</Quantity>
        <IncreaseButton onClick={()=>setCartItems((prev)=>prev.map((i)=>i.id === item.id ? {...i,quantity:i.quantity+1}:i))}>+</IncreaseButton>
        </div>
        </CartItemsContainer>
      
      )))
}
    </>
  )
}

export default CartItems
