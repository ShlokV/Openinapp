import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'

import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClasses =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline rounded-sm text-base'

function Sidebar() {
    const { pathname } = useLocation()

    return (
        <div className="bg-blue-500 w-60 p-3 flex flex-col text-white rounded-md">
            <div className="flex gap-2 px-1 py-3">
                <span className="text-neutral-100 text-lg">Board.</span>
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} selected={pathname === item.path} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2  border-neutral-700">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
                <div className={classNames('text-white-500 cursor-pointer', linkClasses)}>
                    <span>
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div>
        </div>
    )
}

function SidebarLink({ item, selected }) {
    return (
        <Link to={item.path} className={classNames('text-neutral-100', linkClasses)}>
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}

export default Sidebar
