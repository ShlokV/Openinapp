import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineLike } from 'react-icons/ai'
import { TiDownload } from 'react-icons/ti'
import { BsBookmarksFill } from 'react-icons/bs'

function DashboardStatsGrid() {
    return (
        <div className="flex gap-4 w-full">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <TiDownload className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Revenues</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$2,129,430</strong>
                        <span className="text-xs bg-green-500 text-white pl-3 pr-2 py-1 rounded-full ml-2 ">+2.5%</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                {' '}
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
                    <BsBookmarksFill className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Transactions</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">1,520</strong>
                        <span className="text-xs bg-green-500 text-white pl-3 pr-2 py-1 rounded-full ml-2 ">+1.7%</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-300">
                    <AiOutlineLike className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Likes</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">9,721</strong>
                        <span className="text-xs bg-green-500 text-white pl-3 pr-2 py-1 rounded-full ml-2">1.4%</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                {' '}
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
                    <FiUsers className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Users</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">9,721</strong>
                        <span className="text-xs bg-green-500 text-white pl-3 pr-2 py-1 rounded-full ml-2 ">+4.2%</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}
function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

export default DashboardStatsGrid
