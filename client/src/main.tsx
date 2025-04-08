import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
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



const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />)
}
