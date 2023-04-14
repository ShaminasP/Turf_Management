import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Barchart = ({ data }) => {
  return (
    <div className="sm:p-10 w-full ">
      <h3 className="text-violet-100 text-3xl font-bold text-center my-5 pl-8 sm:pl-20">
      Monthly Bookings
      </h3>
      <ResponsiveContainer width="100%" height={370}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={35} stackId="a" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Barchart;
