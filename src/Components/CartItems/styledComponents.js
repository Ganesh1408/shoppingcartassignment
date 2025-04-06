import {styled,createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: sans-serif;
  }

`
export const CartItemsHeading = styled.h1`
  font-size: 25px;
  font-weight: 600;
  position: relative;
  left: 290px;
  margin-top: 40px;
  padding:16px;
  @media screen and (max-width:768px){
    font-size:20px;
    left:0px;
    margin-top:20px;
  }
  
  

`
export const CartItemName = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0px;
padding: 5px;
@media screen and (max-width:768px){
    font-size: 18px;
    padding: 0px;
  }

`
export const CartItemQuan = styled.p`
font-size:16px;
font-weight:400;
color: grey;  
margin:0px;
padding:5px;
@media screen and (max-width:768px){
    font-size: 14px;
    padding: 0px;
  }
`
export const CartItemsContainer = styled.div`
  height: 100px;
  width: 890px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin:0px auto;
  margin-bottom: 10px;
  @media screen and (max-width:768px){
    width:80%;
    margin:0px auto;
    padding:20px;
    margin:20px;
  }
`
export const ReduceButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background-color: #f44336;
  color: white;
  border:none;
  margin-right: 2px;
  @media screen and (max-width:768px){
    height: 25px;
    width: 25px;
  }

`
export const EmptyCartContainer = styled.div`
height: 100px;
  width: 890px;
  background-color:white;
  border-radius: 10px;
  box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin:0px auto;
  margin-bottom: 10px;
  @media screen and (max-width:768px){
    width:80%;
    margin:0px auto;
    padding:0px;
    margin:20px;
  }
`
export const EmptyCartHeading = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color:grey

`
export const EmptyCartDescription = styled.p`
  font-size:16px;
  font-weight:400;
  color:grey;
  padding-top:5px;
`
export const IncreaseButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  border:none;
  margin-left:2 px;
  @media screen and (max-width:768px){
    height: 25px;
    width: 25px;
  }

`
export const Quantity = styled.span`
  margin: 0px 10px;
  font-size: 20px;
  font-weight: bold;
  color: #333;

`