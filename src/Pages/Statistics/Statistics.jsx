import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';


const Statistics = () => {
    const [donation, setDonation] = useState([]);
    const [donatedByMe, setDonatedByMe] = useState(0);

    useEffect(() => {
        const donatedMoney = JSON.parse(localStorage.getItem('donated'));

        if (donatedMoney) {
            setDonation(donatedMoney);
            setDonatedByMe(donatedMoney.length);
        }
        
    }, []);
    
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
      ];
      
      const COLORS = ['#FF444A', '#00C49F'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={24}>
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
      };
    
    return (
        <div>
            <div className="lg:px-24 flex justify-center items-center">
                
                <PieChart width={400} height={700}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={180}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend/>
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;