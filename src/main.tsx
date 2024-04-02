import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import RouteError from './pages/RouteError';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';
import Layout from './Layout';
import ITSolutions from './pages/ITSolutions';
import Internships from './pages/Internships';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <RouteError />,
      },
      {
        path: '/about',
        element: <AboutUs />,
        errorElement: <RouteError />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
        errorElement: <RouteError />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
        errorElement: <RouteError />,
      },
      {
        path: '/services/it-solutions',
        element: <ITSolutions />,
        errorElement: <RouteError />,
      },
      {
        path: '/services/internships',
        element: <Internships />,
        errorElement: <RouteError />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
