import styled, {css, keyframes} from "styled-components";

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`

export const Container = styled.div`
padding: 30px;
`

export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 200px;
height: 40px;
color: white;
background-color: coral;
border-radius: 8px;
cursor: pointer;
margin-bottom: 20px;
&:active{
  transform: scale(0.95);
}
`

export const ActiveButton = styled(Button)`
height: 50px;
width: 300px;
color: gray;
`

export const Rotate = styled('div')`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
border-radius: 50%;
background: coral;
border: 2px solid yellow;
animation: ${rotate} 2s linear infinite;
`
