import { FC } from 'react';
import routerNames from './route-names';
import PublicLayout from '@client/.';
import AdminLayout from '@admin/.';

import HomePage from '@client/home/home';
import Login from '@client/login/login';
import DashBoard from '@admin/dashboard/dashboard';

interface IRoute {
    exact: boolean;
    path: string;
    component: FC<any>;
}

interface IArrayRoutes extends IRoute {
    layout: FC<any>;
    routes?: Array<IRoute>;
}

const routes: Array<IArrayRoutes> = [
    {
        exact: true,
        path: routerNames.homePage,
        component: HomePage,
        layout: PublicLayout,
    },
    {
        exact: true,
        path: routerNames.login,
        component: Login,
        layout: PublicLayout,
    },
    {
        exact: true,
        path: routerNames.dashboard,
        component: DashBoard,
        layout: AdminLayout,
    },
];

export default routes;
