export interface RouteInfo {
  url: string;
  title: string;
  // type: string;
  icon: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsed1?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  url: string;
  title: string;
  // type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  url?: string;
  // title?: string;
  type?: string;
}

export const ROUTESADMIN: RouteInfo[] = [
  {
    title: 'Profil',
    url: '/profile',
    icon: 'accessibility',
  },
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'earth',
  },
  {
    title: 'Senarai Aduan',
    url: '/aduan-list',
    icon: 'chatbubble-ellipses',
  },
  {
    title: 'Senarai Pengguna',
    url: '/user-list',
    icon: 'people',
  },
  {
    title: 'Senarai Jalan',
    url: '/road-list',
    icon: 'trail-sign',
  },
];

export const ROUTESSUPERADMIN: RouteInfo[] = [
  {
    title: 'Profil',
    url: '/profile',
    icon: 'accessibility',
  },
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'earth',
  },
  {
    title: 'Senarai Aduan',
    url: '/aduan-list',
    icon: 'chatbubble-ellipses',
  },
  {
    title: 'Senarai Pengguna',
    url: '/user-list',
    icon: 'people',
  },
  {
    title: 'Senarai Jalan',
    url: '/road-list',
    icon: 'trail-sign',
  },
];

export const ROUTESUSER: RouteInfo[] = [
  {
    title: 'Profil',
    url: '/profile',
    icon: 'accessibility',
  },
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'earth',
  },
  {
    title: 'Senarai Aduan',
    url: '/aduan-list',
    icon: 'chatbubble-ellipses',
  },
  {
    title: 'Senarai Jalan',
    url: '/road-list',
    icon: 'trail-sign',
  },
];
