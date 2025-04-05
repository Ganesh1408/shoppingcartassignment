
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
    padding: 10px;
    margin:0px auto;
    margin-bottom: 10px;

`
export const FreeGiftHeading = styled.h3`
    font-size:20px;
    font-weight:600;
    color: black;
    padding:5px;
`
export const FreeGiftDescription = styled.p`
    font-size:16px;
    font-weight:400;
    color:grey;
    padding:5px;
`
export const FREE = styled.h5`
    font-size:14px;
    font-weight:600;
    color:green;
    padding:8px;
    margin-right: 10px;
    background-color: #e0f7fa;
    border-radius: 16px;

`