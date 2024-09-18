import { useNavigate } from 'react-router-dom';
import './registerPage.scss'
import { useState } from 'react';

import apiRequest from '../../lib/apiRequest';

function RegisterPage(){
    
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit= async(e)=>{
        
        e.preventDefault();
        setError('')
        const formData = new FormData(e.target);
        const username = formData.get('username')
        const email = formData.get("email")
        const password = formData.get('password')
        try {
           
            setIsLoading(true)
            const res = await apiRequest.post('/auth/register', {
                username,
                email,
                password
               
            })
            navigate('/login')
            
        } catch (error) {            
            setError(error.response.data.message)
            
        }finally{
            setIsLoading(false)
        }
      


    }
   
  return (
    <div className='registerPage'>
        <div className="wrapper">
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' required name="username" placeholder='enter your username'></input>
                <input type='email' required name="email" placeholder='enter your email'></input>
                <input type='password' required name="password" placeholder='enter your password'></input>
                <button type='submit'>{isLoading ? "Registering here..." :"Register here"} </button>
                {error && <span> {error}</span>};
                               
            </form>
            
        </div>
    </div>
  )
}

export default RegisterPage