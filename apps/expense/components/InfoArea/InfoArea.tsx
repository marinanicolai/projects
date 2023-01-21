import React from 'react'
import { currentMonthFormat } from "../../helpers/dateFilter";

type Props = {
  currentMonth: string,
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  return (
    <div>{currentMonthFormat(currentMonth)}</div>
  )
}

export default InfoArea