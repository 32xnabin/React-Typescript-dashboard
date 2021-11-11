import { ReactNode } from 'react';

import Case from '../../../../components/Case';
import Dashboard from '../../../../components/Dashboard';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  icon1?: ReactNode;
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
        icon: Dashboard,
        icon1: Dashboard,
      },

      {
        name: 'Cases',
        icon: Case,
        icon1: Case,
        link: '/bm/cases/list',
      },
    ],
  },
];

export default menuItems;
