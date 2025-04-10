import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import BookSearch from './pages/bookSearch.tsx'
import UserLoginPage from './pages/userLogin.tsx'
import MovieSearch from './pages/movieSearch.tsx'
import ProfilePage from './pages/profilePage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <UserLoginPage />, //default page
      },
      {
        path:'ProfilePage',
        element: <ProfilePage />
      },
      {
        path:'BookSearch',
        element: <BookSearch />
      },
      {
        path:'MovieSearch',
        element: <MovieSearch />
      },
    ],
  },
]);




const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />)
}
