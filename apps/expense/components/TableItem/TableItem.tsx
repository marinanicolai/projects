import React from "react";

type Props = {
  size: number;
  item: string;
  fontWeight: "normal" | "bold" | "lighter";
  margin?: string;
};

export const TableItem = ({ size, fontWeight, item, margin }: Props) => {
  return (
    <div
      style={{ fontSize: `${size}px`, fontWeight: fontWeight, margin: margin }}
    >
      {item}
    </div>
  );
};