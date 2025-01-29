import { TPageRoute } from '@/types';
import { RouterPaths } from '@constants/routerPaths';
import React from 'react';

const Registration = React.lazy(() => import('@pages/registration'));
const Home = React.lazy(() => import('@pages'));
const Translations = React.lazy(
  () => import('@pages/administration/translations/container')
);

const authPages = [
  {
    path: RouterPaths.Home,
    Component: Home,
  },
  {
    path: RouterPaths.Registration,
    Component: Registration,
  },
];

const administratorPages = [
  {
    path: RouterPaths.Translations,
    Component: Translations,
  },
];

export const getPages = (): TPageRoute[] => {
  return [...authPages, ...administratorPages];
};
