"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = {
  2014: 1,
  2015: 2,
  2016: 3,
  2017: 4,
  2018: 5,
  2019: 6,
  2020: 7,
  2021: 2,
  2022: 1,
  2023: 2,
}

export const FoundedByDate = () => {
  const transformedData = Object.entries(data).map(([year, founded]) => ({
    year: Number(year),
    founded,
  }))

  return (
    <div className="h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={500}
          data={transformedData}
          layout="vertical"
          margin={{
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="1 10" />
          <YAxis dataKey="year" type="category">
            <Label angle={-90} position="insideLeft">
              Año
            </Label>
          </YAxis>
          <XAxis type="number">
            <Label position="insideBottom" offset={-10}>
              Numero de proyectos
            </Label>
          </XAxis>
          <Tooltip />
          <Bar name="Proyectos fundados" dataKey="founded" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
