import {useState} from "react";
import { Box, Layout, Text, Button } from "@shared/core";
import InfoArea from "@components/InfoArea/InfoArea"
import InputArea from "@components/InputArea";
import TableArea from "@components/TableArea";
import {getCurrentMonth} from "../../expense/helpers/dateFilter";

const IndexPage = () => {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);};
  return (
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
           <InfoArea currentMonth={currentMonth} 
                     onMonthChange={handleMonthChange}  
                     income={10} 
                     expense={0}/>
       </Box>
       <Box
          display="grid">
       <InputArea />
       </Box>
       <Box
          display="grid">
       <TableArea/>
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
  );
};

export default IndexPage;
