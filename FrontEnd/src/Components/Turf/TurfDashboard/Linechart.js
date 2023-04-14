import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const LineGraph = ({ data }) => (
    <div className="sm:p-10 w-full ">
        <h3 className="text-violet-100 text-3xl font-bold text-center my-5 pl-8 sm:pl-20"> Daily Earnings</h3>
        <ResponsiveContainer width="100%" height={370}>
            <LineChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                <XAxis dataKey="_id" tick={{ fontSize: 14, fill: "#ccc" }} tickMargin={10} stroke="#ccc" />
                <YAxis dataKey="" tick={{ fontSize: 14, fill: "#ccc" }} tickMargin={10} stroke="#ccc"/>
                <Tooltip contentStyle={{ backgroundColor: '#111', border: 'none', boxShadow: '2px 2px 5px rgba(255,255,255,0.3)' }} labelStyle={{ fontSize: 16, fontWeight: 'bold', color: "#ccc" }} itemStyle={{ fontSize: 14, color: "#ccc" }} />
                <Legend wrapperStyle={{ fontSize: 14, fill: "#ccc" }} />
                <Line type="monotone" dataKey="totalPrice" stroke="#4bb2c5" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default LineGraph;