import React from "react";
import {
  IoArrowForwardCircleSharp,
  IoArrowBackCircleSharp,
} from "react-icons/io5";
import { currentMonthFormat } from "../../helpers/dateFilter";
import { Layout, Box, Container, Button } from "@shared/core";
import { TrackerItem } from "@components/TrackerItem/TrackerItem";


type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }
 
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }
  return (
    <Container>
      <Box
       display="grid"
        p={{ _: 8, xl: 4 }}
        width={{ _: 1, lg: 0.8, xl: 0.6 }}
        mx={{ _: 0, lg: "auto" }}
       
        gridAutoFlow={{ _: "row", lg: "column" }}
      >
        <IoArrowBackCircleSharp onClick={handlePrevMonth} />
        <div>{currentMonthFormat(currentMonth)}</div>
        <IoArrowForwardCircleSharp onClick={handleNextMonth} /> 
      
        <TrackerItem title="income" value={income}/>    
     
        <TrackerItem title="expense" value={expense} />   
     
        <TrackerItem title="balance" value={income - expense}
        color = {(income - expense) < 0 ? 'rgba(255, 0, 1, .7)' : 'rgba(0, 255, 0, .7)'} />
      </Box>
    </Container>
  );
};

export default InfoArea;
