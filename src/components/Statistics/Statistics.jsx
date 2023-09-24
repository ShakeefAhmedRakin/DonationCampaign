import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#ff444a", "#00c49f"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{
        fontSize: "24px",
        fontWeight: "600",
      }}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const Statistics = () => {
  const donated = getStoredDonation();

  const totalCampaigns = useLoaderData();

  console.log(donated.length, totalCampaigns.length);

  const data = [
    { name: "Total Donation", value: totalCampaigns.length },
    { name: "Your Donation", value: donated.length },
  ];

  return (
    <>
      <div className="px-5 md:px-[100px] lg:px-[150px] md:container mx-auto">
        <div className="flex justify-center items-center w-full h-[500px] bg-gray-200 rounded-t-lg">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center bg-gray-200 rounded-b-lg pb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex gap-4 items-center">
              <p>Your Donations</p>
              <div className="bg-[#00c49f] w-[100px] h-[12px] rounded"></div>
            </div>
            <div className="flex gap-4 items-center">
              <p>Total Donations</p>
              <div className="bg-[#ff444a] w-[100px] h-[12px] rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
