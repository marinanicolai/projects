import React from "react";
import {useState} from "react";
import { Container, Box, Button } from "@shared/core";
import { TableItem } from "@components/TableItem/TableItem";
import { Label } from "@shared/core";
import { categories } from '../../data/categories';

type Props = {
  list?: [];
};

let categoryKeys: string[] = Object.keys(categories);

const InputArea = ({ list }: Props) => {
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');

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
          <Label>
            <TableItem size={18} item={`Date`} fontWeight={"bold"} />
            <input type="date" />
          </Label>
          <Label>
            <TableItem size={18} item={`Category`} fontWeight={"bold"} />
            <select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
            <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>{categories[key].title}</option>
            ))}
          </>
            </select>
          </Label>
          <Label>
            <TableItem size={18} item={`Description`} fontWeight={"bold"} />
            <input type="text" value={titleField} onChange={e => setTitleField(e.target.value)}/>
          </Label>
          <Label>
            <TableItem size={18} item={`Amount`} fontWeight={"bold"} />
          </Label>
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
