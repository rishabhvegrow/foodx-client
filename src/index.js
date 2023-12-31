import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './components/Error';
import Body from './components/Body';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RestaurentMenu from './components/RestaurentDetails';
import SignUp from './components/Signup'
import SignIn from './components/Signin'
import Cart from './components/Cart'
import Orders from './components/Orders'
import {UserProvider} from './utils/UserContext'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/restaurent/:id',
        element: <RestaurentMenu />
      }
    ]
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={appRouter} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();