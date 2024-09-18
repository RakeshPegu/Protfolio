import './layout.scss';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/authProvider.jsx';

// Layout component
export const Layout = () => {
  return (
    <div className='layout'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

// RequireAuth component
export const RequireAuth = () => {
  const {currentUser} = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }else{
    return (
        <div className='layout'>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      );

  }

 
};
