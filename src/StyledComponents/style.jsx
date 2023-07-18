import React from "react";
import { Box, Container, Desc, Title } from "./styledComponents";


export class Styled extends React.Component{
  render(){
    return (
      <Container>
        <Box rang='yellow' type='large'>Large</Box>
        <Box rang='black' type='medium'>Medium</Box>
        <Box rang='green' type='small'>Small</Box>
        <Title>Title</Title>
        <Desc>Description</Desc>
      </Container>
    )
  }
}

export default Styled;