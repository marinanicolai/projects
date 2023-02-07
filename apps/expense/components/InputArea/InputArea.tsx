import React from "react";
import { Container, Box, Button } from "@shared/core";
import { TableItem } from "@components/TableItem/TableItem";
import { listenerCount } from "process";
import InputLabel from "./InputLabel.styled.js";

type Props = {
  list?: [];
};

const InputArea = ({ list }: Props) => {
  const handleAddEvent = () => {
    // let errors: string[] = [];
    console.log("clicked");
  };

  return (
    <>
  <Container>
    <Box
        display="grid"
        p={{ _: 8, xl: 4 }}
        width={{ _: 1, lg: 0.9, xl: 0.7 }}
        mx={{ _: 0, lg: "auto" }}
        gridAutoFlow={{ _: "row", lg: "column" }}
      >
        <InputLabel>
         <TableItem size={18} item={`Date`} fontWeight={"bold"}  />
         <input type="date" />
        </InputLabel>
        <InputLabel>
         <TableItem size={18} item={`Category`} fontWeight={"bold"}  />
        </InputLabel>
        <InputLabel>
         <TableItem size={18} item={`Description`} fontWeight={"bold"} />
        </InputLabel>
        <InputLabel>
         <TableItem size={18} item={`Amount`} fontWeight={"bold"}/>
        </InputLabel>
        <Button variant="tonal" onClick={handleAddEvent}>
                Add
        </Button>
    </Box>
   </Container>
       {/* <table>
        <thead>
          <tr>
            <th>
              <TableItem
                size={18}
                item={`Date`}
                fontWeight={"normal"}
                margin={"auto"}
              />
            </th>
            <th>
              <TableItem
                size={18}
                item={`Category`}
                fontWeight={"normal"}
                margin={"auto"}
              />
            </th>
            <th>
              <TableItem
                size={18}
                item={`Description`}
                fontWeight={"normal"}
                margin={"auto"}
              />
            </th>
            <th>
              <TableItem
                size={18}
                item={`Amount`}
                fontWeight={"normal"}
                margin={"auto"}
              />
            </th>
            <th>
              {" "}
              <Button variant="tonal" onClick={handleAddEvent}>
                Add
              </Button>
            </th>
          </tr>
        </thead>
      </table> */}
      {/* <tbody>
        {/* {list?.map((item,index) => (
        <TableItem size = {18} item={item} fontWeight={'normal'} margin={'auto'} key={index}/>))} */}
      {/* </tbody> */} 
    </>
  );
};

export default InputArea;
