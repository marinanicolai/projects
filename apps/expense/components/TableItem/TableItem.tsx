import React from "react";
import {Item} from "../../types/Item";

type Props = {
  size?: number;
  name?: string;
  item?:  Item;
  fontWeight?: "normal" | "bold" | "lighter";
  margin?: string;
  width?: string;
 
};

export const TableItem = ({ size, fontWeight, item, margin, width,name}: Props) => {
  return (
    <div
      style={{ fontSize: `${size}px`, fontWeight: fontWeight, margin: margin, width:width }}
    >
      {name}
    </div>
  );
};
