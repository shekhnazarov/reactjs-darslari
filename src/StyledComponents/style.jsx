import React from "react";
import { ActiveButton, Button, Container, Rotate } from "./styledComponents";
import {ThemeProvider, createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props)=> props.theme.bg};
  color: ${(props)=> props.theme.cl};
}
`
export class Styled extends React.Component{
  state = {
    light: false,
  }
  render(){
    const theme = {
      bg: this.state.light ? 'white': 'black',
      cl: this.state.light ? 'black': 'white',
    }
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Button>Click me</Button>
        <ActiveButton>Active Button</ActiveButton>
        <Rotate>Rotate</Rotate>
        <button onClick={()=> this.setState({light: !this.state.light})}>theme change</button>
      </ThemeProvider>
    )
  }
}

export default Styled;