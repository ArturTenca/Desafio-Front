import React from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

export default function Sensor({ data }) {
  console.log(data)
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="grupos" />
      <YAxis />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="pontos"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}
