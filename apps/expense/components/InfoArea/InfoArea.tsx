import React from "react";
import {
  IoArrowForwardCircleSharp,
  IoArrowBackCircleSharp,
} from "react-icons/io5";
import { currentMonthFormat } from "../../helpers/dateFilter";
import { Layout, Box, Container } from "@shared/core";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  return (
    <Container>
      <Box
        p={{ _: 8, xl: 4 }}
        width={{ _: 1, lg: 0.8, xl: 0.6 }}
        mx={{ _: 0, lg: "auto" }}
        display="grid"
        gridAutoFlow={{ _: "row", lg: "column" }}
      >
        <IoArrowBackCircleSharp />
        <div>{currentMonthFormat(currentMonth)}</div>
        <IoArrowForwardCircleSharp />
      </Box>
    </Container>
  );
};

export default InfoArea;
