import { lazy } from 'react';

const ButtonView = lazy(() => import('./ButtonView'));
const AccordionView = lazy(() => import('./AccordionView'));

export { ButtonView, AccordionView };
