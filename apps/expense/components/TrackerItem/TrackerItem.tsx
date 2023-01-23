import React from 'react'

type Props = {
    title:string;
    value: number;
    color?: string;
}

export const TrackerItem = ({title, value, color}:Props) => {
  return (
    <div>
        <p>{title}</p>
        <p>{value}</p>
    </div>
  )
}

