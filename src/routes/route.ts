import React from 'react';
import { TPageRoute } from '@/types';
import { RouterPaths } from '@constants/routerPaths';

const Registration = React.lazy(() => import('@pages/registration'));
const Home = React.lazy(() => import('@pages'));

export const getPages = (): TPageRoute[] => {
  return [
    {
      path: RouterPaths.Home,
      Component: Home,
    },
    {
      path: RouterPaths.Registration,
      Component: Registration,
    },
  ];
};
