import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.tsx'
import UserLoginPage from './pages/userLogin.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <UserLoginPage />,
      },
      {
        path: 'userLogin',
        element: <UserLoginPage />,
      },
      {
        path: 'errorPage', 
        element: <ErrorPage />,
      },
    ],
  },
]);





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
