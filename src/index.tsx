import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/app/layout/styles.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './app/router/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
