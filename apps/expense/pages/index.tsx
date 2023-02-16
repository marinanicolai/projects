import { useState, useEffect } from "react";
import { Box, Layout, Text, Button } from "@shared/core";
import InfoArea from "@components/InfoArea/InfoArea";
import InputArea from "@components/InputArea/InputArea";
import TableArea from "@components/TableArea/TableArea";
//import Table from "@components/Table/Table";
//import FilterTable from "@components/FilterTable/FilterTable";
import { categories } from "../data/categories";
import {
  getCurrentMonth,
  filterListByMonth,
} from "../../expense/helpers/dateFilter";
import { Item } from "../types/Item";
import { items } from "../data/items";

const IndexPage = () => {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // useEffect(() => {
  //   setFilteredList(filterListByMonth(list, currentMonth));
  // }, [list, currentMonth]);

  // useEffect(() => {
  //   let incomeCount = 0;
  //   let expenseCount = 0;

  //   for (let i in filteredList) {
  //     if (categories[filteredList[i].category].expense) {
  //       expenseCount += filteredList[i].value;
  //     } else {
  //       incomeCount += filteredList[i].value;
  //     }
  //   }

  //   setIncome(incomeCount);
  //   setExpense(expenseCount);
  // }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };
  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
    console.log("this is title " + item.title);
    console.log(item.value);
    console.log(list);
  };

  return (
    <>
        <Layout>
      <Box
        p={{ _: 8, xl: 4 }}
        width={{ _: 1, lg: 0.8, xl: 0.6 }}
        mx={{ _: 0, lg: "auto" }}
      >
        <Text as="h1" variant="text-headline-medium" mb={[3, 2]}>
          Expense Tracker App
        </Text>
        <Box display="grid">
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={10}
            expense={0}
          />
        </Box>
        <Box display="grid">
          <InputArea onAdd={handleAddItem} />
        </Box>
        <Box display="grid">
          <TableArea items={list} />
        </Box>
       

        {/* <Box
          display="grid"
          gridAutoFlow={{ _: "row", lg: "column" }}
          gridGap="4"
        >
          <Button variant="elevated" onPress={() => alert("Button pressed!")}>
            Elevated Button
          </Button>
          <Button variant="filled">Filled Button</Button>
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="text">Text Button</Button>
          <Button variant="tonal">Tonal Button</Button>
        </Box> */}
      </Box>
    </Layout>
     {/* <FilterTable/> */}
     </>
  );
};

export default IndexPage;
