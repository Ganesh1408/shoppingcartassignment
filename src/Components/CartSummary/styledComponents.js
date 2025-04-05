import {styled,createGlobalStyle} from 'styled-components'


export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: sans-serif;
}

`
export const CartSummaryHeading =styled.div`

    font-size:25px;
    color:black;
    padding:16px;
    position:relative;
    left:290px;
    margin-top:40px;

`
export const CartSummaryContainer = styled.div`
    margin:0px auto;
    padding:16px;
    background-color:white;
    box-shadow:0px 2px 4px  rgba(0, 0, 0, 0.2);
    border-radius:10px;
    

`
export const CartSummaryDiv = styled.div`
    
    height:140px;
    width:870px;
    border-radius:6px;

`
export const CartSummaryHeadings = styled.div `
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:10px;
`
export const Heading  = styled.h3`
    font-size:16px;
    color:black;
    font-weight:bold;

`
export const ProgressContainer = styled.div`
    background-color:aliceblue;
    width:100%;
    border-radius:8px;
    height:80px;
    margin:16px 0px;


`
export const ProgressDescription = styled.p`
    font-size:14px;
    color:black;
    padding:20px;
    padding-bottom:0px;
    font-weight:normal;

`
export const ProgressBar = styled.progress`
    display:block;
    color:blue;
    width:97%;
    height:25px;
    margin:0px auto;
` 

