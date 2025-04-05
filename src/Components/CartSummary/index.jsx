import React from 'react'
import {GlobalStyles,CartSummaryContainer,CartSummaryHeadings,Heading,CartSummaryDiv,CartSummaryHeading,ProgressContainer,ProgressDescription,ProgressBar} from './styledComponents'

function CartSummary({totalPrice}) {

  return (
    <>
    <GlobalStyles/>
        <CartSummaryHeading>CartSummary</CartSummaryHeading>
        <CartSummaryContainer>
        <CartSummaryDiv>
            <CartSummaryHeadings>
                <Heading>subtotal:</Heading>
                <Heading>{totalPrice}</Heading>
            </CartSummaryHeadings>
            <hr/>
            <ProgressContainer>
                <ProgressDescription>Add ₹{1000-totalPrice >0 ?1000 -totalPrice :0} more to get a Free Wireless Mouse</ProgressDescription>
                <ProgressBar value ={totalPrice} max={1000}></ProgressBar>
            </ProgressContainer>

            
        </CartSummaryDiv>
      
    </CartSummaryContainer>
    </>
  )
}

export default CartSummary
