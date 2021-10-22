import { ReactNode } from 'react'

import BrightnessLowTwoToneIcon from '@material-ui/icons/BrightnessLowTwoTone'
import TableChartTwoToneIcon from '@material-ui/icons/TableChartTwoTone'

export interface MenuItem {
  link?: string
  icon?: ReactNode
  badge?: string
  items?: MenuItem[]
  name: string
}

export interface MenuItems {
  items: MenuItem[]
  heading: string
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Dashboard',
        link: '/bm/dashboards',
        icon: BrightnessLowTwoToneIcon,
      },

      {
        name: 'Cases',
        icon: TableChartTwoToneIcon,
        link: '/bm/cases/list',
      },
    ],
  },
]

export default menuItems
