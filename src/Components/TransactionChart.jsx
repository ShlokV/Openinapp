import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {
        name: 'Week 1',
        User: 500,
        Guest: 400
    },
    {
        name: 'Week 2',
        User: 350,
        Guest: 450
    },
    {
        name: 'Week 3',
        User: 200,
        Guest: 300
    },
    {
        name: 'Week 4',
        User: 400,
        Guest: 350
    }
]

function TransactionChart() {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Activities</strong>
            <span className="text-gray-500 font-sm">May-June 2021</span>
            <div className="w-full mt-3 flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="User" fill="#98D89E" />;
                        <Bar dataKey="Guest" fill="#EE8484" />;
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TransactionChart
