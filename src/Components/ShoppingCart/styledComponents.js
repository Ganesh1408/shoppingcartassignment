import {styled,createGlobalStyle}   from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: sans-serif;
}

`
export const ShoppingCartContainer = styled.div`
    background-color: #f0f0f0;
    height:100%;
    min-height:100vh;
    width:100%;
    max-width:100vw;
    overflow-x:hidden;
    display: flex;
    flex-direction: column;
    padding:30px;
    


`

export const ShoppingCartHeader = styled.h1`
    font-size:40px;
    line-height:1;
    color:black;
    text-align:center;
    padding:16px;
    margin-bottom:80px;
    font-weight:600;

    
`

export const Product = styled.h2`
    font-size:25px;
    color:black;
    position:relative;
    left:300px;
    padding:16px;
    @media screen and (max-width:768px){
        font-size:20px;
        left:0px;
    }

`
export const ProductsListContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap : wrap;
    gap:30px;
    margin:0px auto;
    
`

export const ProductContainer = styled.li`

    height:120px;
    width:200px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.2);
    display:flex;
    flex-direction:column;
    

`

export const ProductHeader = styled.h2`
    font-size:20px;
    color:black;
    text-align:left;
    padding:16px;
    padding-bottom:0px;
    
`
export const ProductPrice = styled.p`
    font-size:16px;
    color:black;
    text-align:left;
    padding:16px;
    padding-bottom:10px;
    font-weight:none;

`
export const Button = styled.button`
    background-color:dodgerblue;
    color:white;
    font-size:12px;
    border:none;
    border-radius:4px;
    padding:8px  50px;
    align-self:center;


`