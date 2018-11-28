import { lazy } from 'react';

const ButtonView = lazy(() => import('./ButtonView'));
const AccordionView = lazy(() => import('./AccordionView'));
const BurgerView = lazy(() => import('./BurgerView'));

export { ButtonView, AccordionView, BurgerView };
