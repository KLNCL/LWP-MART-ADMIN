import React, {useState, useEffect} from 'react';
import "./Login.scss"
import { useNavigate } from "react-router-dom";
import instance from '../../utils/AxiosInstance';



export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      checkLoginStatus();
    }, []);

    const checkLoginStatus = () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        navigate("/login");
      }
    };

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
    
        try {
          const response = await instance.post('/adminlogin', { email, password });
          const accessToken = response.data.accessToken;
          localStorage.setItem('authToken', accessToken);
          setSuccess(true);
          navigate('/');
        } catch (err) {
          const errorMsg = err.response?.data?.message || 'Something went wrong';
          console.error('Login error:', err);
          setError(errorMsg);
        }
      };
      

    return (
        <div className="login-container">
            <div className="heder">
                <h1>LWP MART</h1>
            </div>
            <form className="login" onSubmit={submit}>
                <div className="gray-box">
                <div className='form'>
                <input type='text' name='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' name='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)}/>

                {success && (
                  <span style={{ color: 'green', display: 'block', marginTop: '10px' }}>
                    Login successful
                  </span>
                )}

                {error && (
                  <span style={{ color: 'red', display: 'block', marginTop: '10px' }}>
                    {error}
                  </span>
                )}

                <button class="LogIn-button" type="submit">Log In</button>
              </div>
             
                </div>
            </form>
        </div>
    )
}
