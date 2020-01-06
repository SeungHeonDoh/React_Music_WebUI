import styled, { createGlobalStyle } from 'styled-components';


export const globalStyles = createGlobalStyle`
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:white;
        margin:0;
    }
`;



export const RenderArea = styled.div `
    color : white;
    background : black;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
`

export const DescriptionArea = styled.div `
    width: 300px;
    z-index: 1200;
    background-color: #191919;
    top: 0px;
    position: relative;
    color: white;
`

export const Page = styled.div `
    display: flex;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    
`

export const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;


export const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;