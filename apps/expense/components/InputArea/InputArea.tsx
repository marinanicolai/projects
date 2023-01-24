import React from 'react'
import { Container, Box ,Button} from '@shared/core';
import { TableItem } from '@components/TableItem/TableItem';

const InputArea = () => {
  return (
    <Container> 
      <Box
       display="grid"
        p={{ _: 8, xl: 4 }}
        width={{ _: 1, lg: 0.8, xl: 0.6 }}
        mx={{ _: 0, lg: "auto" }}
       
        gridAutoFlow={{ _: "row", lg: "column" }}
      >
       <TableItem size = {18} item = {`Date`} fontWeight={'normal'} />
       <TableItem size = {18} item = {`Category`} fontWeight={'normal'} />
       <TableItem size = {18} item = {`Description`} fontWeight={'normal'} />
       <TableItem size = {18} item = {`Amount`} fontWeight={'normal'} />
       <Button variant="tonal">Add</Button>
       </Box>
    </Container>
  )
}

export default InputArea