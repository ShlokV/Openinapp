import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import TopProducts from './TopProducts'
import AddProfile from './AddProfile'

function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
            </div>
            <div className="flex gap-4 pb-4 ">
                <TopProducts />
                <AddProfile />
            </div>
        </div>
    )
}

export default Dashboard
