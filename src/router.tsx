import loadable from '@loadable/component';
import { createHashRouter } from 'react-router-dom';

import App from './app';
import demoRouters from './modules/demo/router';

const NotFound = loadable(() => import('./modules/misc/not-found/not-found'));

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [demoRouters],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
