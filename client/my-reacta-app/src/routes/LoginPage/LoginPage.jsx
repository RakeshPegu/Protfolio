import { useNavigate } from 'react-router-dom'
import './loginPage.scss'
import { useContext, useState } from 'react'
import apiRequest from '../../lib/apiRequest'
import AuthContext from '../../context/authProvider'


function LoginPage(){
    const navigate = useNavigate()
    const {updateUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async(e) =>{
        e.preventDefault()
        setError('')
        setIsLoading(true)
        const formData = new FormData(e.target)
        const email = formData.get('email')
        const password = formData.get('password')
        try {
            const res = await apiRequest.post('/auth/login', {
                email,
                password
            })
            updateUser(res.data)
            navigate('/')
            
            
        } catch (error) {
            setError(error.response.data.message)
            
        }finally{
            setIsLoading(false)
        }


    }
  return (
    <div className='loginPage'>
         <div className="wrapper">
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                
                <input type='email' required name="email" placeholder='enter your email'></input>
                <input type='password' required name="password" placeholder='enter your password'></input>
                <button type='submit'>{isLoading ? "Logging in  here..." :"Log in here"} </button>
                <span>Don't you have an account ?<a href='/register'>Create here</a> </span>
                {error && <span>{error}</span>}                
            </form>
            
        </div>
    </div>
  )
}

export default LoginPage