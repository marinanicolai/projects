import React from "react";
import { Container, Box } from "@shared/core";
import { TableItem } from "@components/TableItem/TableItem";
import { Item } from "../../types/Item";

type Props = {
  items: Item[];
};

const TableArea = ({ items }: Props) => {
  console.log(items);

  return (
    <Container>
      <Box
        display="grid"
        p={{ _: 8, xl: 4 }}
        width={{ _: 1, lg: 0.9, xl: 0.7 }}
        mx={{ _: 0, lg: "auto" }}
        gridAutoFlow={{ _: "row", lg: "column" }}
      >
        <TableItem size={18} name={`Date`} fontWeight={"bold"} width={"3rem"} />
        <TableItem
          size={18}
          name={`Category`}
          fontWeight={"bold"}
          width={"3rem"}
        />
        <TableItem
          size={18}
          name={`Description`}
          fontWeight={"bold"}
          width={"6rem"}
        />
        <TableItem
          size={18}
          name={`Amount`}
          fontWeight={"bold"}
          width={"6rem"}
        />
        <TableItem />
        <div>
          {items.map((item, index) => (
            <>
              <p>{new Date(item.date).toLocaleDateString()}</p>
              <p key={index}>{item.title}</p>
            </>
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default TableArea;
