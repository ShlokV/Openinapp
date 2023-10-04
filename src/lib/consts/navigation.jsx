import { VscDashboard } from 'react-icons/vsc'
import { BsBookmarks } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineSchedule } from 'react-icons/ai'
import { HiOutlineCog, HiOutlineQuestionMarkCircle } from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <VscDashboard />
    },
    {
        key: 'transactions',
        label: 'Transactions',
        path: '/transactions',
        icon: <BsBookmarks />
    },
    {
        key: 'schedules',
        label: 'Schedules',
        path: '/Schedules',
        icon: <AiOutlineSchedule />
    },

    {
        key: 'Users',
        label: 'Users',
        path: '/Users',
        icon: <FiUsers />
    },
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]
