import styled, {css} from "styled-components";

const getSize = (props) => {
  switch(props.type){
    case 'large': return '300px';
    case 'medium': return '200px';
    case 'small': return '100px'
    default: return '200px'
  }
}

const common = css`
color: blue;
font-family: bold;
font-weight: 400;
padding: 10px;
font-size: 30px;
`

export const Container = styled('div')`
display: flex;
align-items: center;
background-color: coral;
color: white;
padding: 20px;
`
export const Title = styled.h1`
${common}
font-size: 30px;
`

export const Desc = styled.h1`
${common}
font-size: 20px;
color: yellow;
`

export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: ${getSize};
height: ${(props)=> getSize(props)};
border: 2px solid black;
margin: 20px;
font-size: 20px;
background-color: ${(props) => props.rang ==='yellow' ? 'yellow': 'green'};
`