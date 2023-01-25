import React from "react";
import { Container, Box } from "@shared/core";
import { TableItem } from "@components/TableItem/TableItem";

const TableArea = () => {
  return (
    <Container>
      <Box
        display="grid"
        p={{ _: 8, xl: 4 }}
        width={{ _: 1, lg: 0.8, xl: 0.6 }}
        mx={{ _: 0, lg: "auto" }}
        gridAutoFlow={{ _: "row", lg: "column" }}
      >
        <TableItem size={18} item={`Date`} fontWeight={"bold"} />
        <TableItem size={18} item={`Category`} fontWeight={"bold"} />
        <TableItem size={18} item={`Description`} fontWeight={"bold"} />
        <TableItem size={18} item={`Amount`} fontWeight={"bold"} />
      </Box>
    </Container>
  );
};

export default TableArea;