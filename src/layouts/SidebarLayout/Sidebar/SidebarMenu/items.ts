import { ReactNode } from 'react';

import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';

import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Dashboard',
        link: '/bm/dashboards',
        icon: AvTimerOutlinedIcon,
      },

      {
        name: 'Cases',
        icon: BuildOutlinedIcon,
        link: '/bm/cases/list',
      },
    ],
  },
];

export default menuItems;
