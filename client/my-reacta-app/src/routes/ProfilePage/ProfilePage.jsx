import { useContext } from 'react';
import './profilePage.scss'
import AuthContext from '../../context/authProvider';
import apiRequest from '../../lib/apiRequest';
import { Link, useNavigate } from 'react-router-dom';

function ProfilePage(){
    const {currentUser , updateUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = async()=>{


        try {
            await apiRequest.post('/auth/logout')
            updateUser(null)
            navigate('/login')
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div className='profilePage'>
        <div className="wrapper">
            <div className="imgContainer">
                <img src='/noavatar.jpg'></img>
            </div>
            <div className="text">
                <div className="content">
                <span>Username: <b>{currentUser.username}</b></span>
              <span>E-mail:<b>{currentUser.email}</b> </span>
              <span>Joined in : 12/23/2023</span>
                </div>
              
              <div className="btn">
              <button className='logout' onClick={handleLogout}>Logout</button>
             <Link to="/updateUser" ><button className='update' >Update</button></Link>
              </div>
            
            </div>

        </div>
       
    </div>
  )
}

export default ProfilePage;