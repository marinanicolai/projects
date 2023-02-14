import React from "react";
import { Container, Box } from "@shared/core";
import { TableItem } from "@components/TableItem/TableItem";
import {Item} from "../../types/Item";

type Props = {
  list: Item[]
}

const TableArea = ({list} : Props) => {
  return (
    <Container>
      <Box
        display="grid"
        p={{ _: 8, xl: 4 }}
        width={{ _: 1, lg: 0.9, xl: 0.7 }}
        mx={{ _: 0, lg: "auto" }}
        gridAutoFlow={{ _: "row", lg: "column" }}
      >
        <TableItem size={18} item={`Date`} fontWeight={"bold"} width={"3rem"} /> 
        <TableItem size={18} item={`Category`} fontWeight={"bold"} width={"3rem"} />
        <TableItem size={18} item={`Description`} fontWeight={"bold"} width={"6rem"}/>
        <TableItem size={18} item={`Amount`} fontWeight={"bold"} width={"6rem"} />
        <TableItem />
        <div>
          {list.map((item, index) => (
            <TableItem key={index} item={item} />
          ))}
        </div>
      </Box>
    </Container>
  );
};


export default TableArea;
