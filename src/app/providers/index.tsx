import {CurrentWeather} from 'pages/currentWeather';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CurrentWeather />,
    errorElement: <div>404</div>,
  },
]);

export const Providers = () => {
  return <RouterProvider router={ router } />;
};
