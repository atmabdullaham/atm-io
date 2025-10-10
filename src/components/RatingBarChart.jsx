import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const RatingBarChart = ({ ratings }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={ratings}
        layout="vertical"
        margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis type="number" axisLine={false} tickLine={false} />
        <YAxis
          dataKey="name"
          type="category"
          reversed
          className="text-lg font-normal text-gray-500"
          axisLine={false}
          tickLine={false}
        />
        <Bar dataKey="count" fill="#FF9100" barSize={25} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatingBarChart;
