
import { styled,createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: sans-serif;
    }
`
export const FreeGiftContainer = styled.div`
    height: 60px;
    width: 890px;
    background-color:white;
    border-radius: 10px;
    box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin:0px auto;
    margin-bottom: 10px;
    @media screen and (max-width:768px){
        width:80%;
        margin:0px auto;
        padding:16px;
        margin:20px;
    }

`
export const FreeGiftHeading = styled.h3`
    font-size:20px;
    font-weight:600;
    color: black;
    padding:5px;
    @media screen and (max-width:768px){
        font-size:16px;
        padding:0px;
    }

`
export const FreeGiftDescription = styled.p`
    font-size:16px;
    font-weight:400;
    color:grey;
    padding:5px;
    @media screen and (max-width:768px){
        font-size:14px;
        padding:0px;
    }
`
export const FREE = styled.h5`
    font-size:14px;
    font-weight:600;
    color:green;
    padding:8px;
    margin-right: 10px;
    background-color: #e0f7fa;
    border-radius: 16px;
    @media screen and (max-width:768px){
        font-size:12px;
        padding:5px;
        margin-right: 5px;
    }

`