import React from "react";

type Props = {
  size?: number;
  item?: string;
  fontWeight?: "normal" | "bold" | "lighter";
  margin?: string;
  width?: string;
};

export const TableItem = ({ size, fontWeight, item, margin,width }: Props) => {
  return (
    <div
      style={{ fontSize: `${size}px`, fontWeight: fontWeight, margin: margin, width:width }}
    >
      {item}
    </div>
  );
};
