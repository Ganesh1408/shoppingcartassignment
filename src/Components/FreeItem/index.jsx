import React from 'react'
import {FREE_GIFT} from '../../Data'
import {FreeGiftContainer,FreeGiftHeading,FreeGiftDescription,FREE} from './styledComponents'

function FreeItem() {
  return (
    <FreeGiftContainer>
    <div>
      <FreeGiftHeading>{FREE_GIFT.name}</FreeGiftHeading>
      <FreeGiftDescription>₹{FREE_GIFT.price} x 1 = {FREE_GIFT.price*1}</FreeGiftDescription>
      </div>
      <FREE>FREE GIFT</FREE>
    </FreeGiftContainer>
  )
}

export default FreeItem
