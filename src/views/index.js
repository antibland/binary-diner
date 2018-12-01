import { lazy } from 'react';

const ButtonView = lazy(() => import('./ButtonView'));
const AccordionView = lazy(() => import('./AccordionView'));
const BurgerView = lazy(() => import('./BurgerView'));
const ImageZoomView = lazy(() => import('./ImageZoomView'));

export { ButtonView, AccordionView, BurgerView, ImageZoomView };
