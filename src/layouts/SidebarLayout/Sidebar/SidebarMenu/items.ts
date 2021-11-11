import { ReactNode } from 'react';

import { ReactComponent as Dashboard } from '../../../../components/Dashboard/Dashboard.svg';
import { ReactComponent as Case } from '../../../../components/Case/Cases.svg';

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
        icon: Dashboard,
      },

      {
        name: 'Cases',
        icon: Case,
        link: '/bm/cases/list',
      },
    ],
  },
];

export default menuItems;
