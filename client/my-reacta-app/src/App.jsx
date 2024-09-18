import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout, RequireAuth } from './routes/LayoutPage/Layout';
import HomePage from "./routes/HomePage/HomePage";
import RegisterPage from "./routes/RegisterPage/RegisterPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import AboutPage from "./routes/AboutPage/AboutPage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import AdminPage from "./routes/AdminPage/AdminPage";
import AuthContext from "./context/authProvider";
import SinglePage from "./routes/singlePage/SinglePage";
import { singlePageLoader } from "./lib/loader";
import UpdateUserPage from "./routes/updateUserPage/updateUserPage";
import Card from "./routes/Card/Card";


const AdminPageWrapper = () => {
  const { currentUser } = useContext(AuthContext); // Destructure currentUser

  if (currentUser && currentUser.email === 'rpegu0651@gmail.com') {
    return <AdminPage />;
  } else {
    return <Navigate to="/" />;
  }
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/register', element: <RegisterPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: '/about', element: <AboutPage /> },
        {path:'/:id', element: <SinglePage/>, loader:singlePageLoader},
        
        

      ]
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        { path: '/profile', element: <ProfilePage /> },
        { path: '/admin', element: <AdminPageWrapper /> },
        {path:'/updateUser', element:<UpdateUserPage/> }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
