import Notification from './Notification';
import { useState, useEffect } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordIsValid, setPasswordisValid] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('error')
    
    useEffect(() => {
            // setFormIsValid(email.includes('@') && password.trim().length > 6)
            setFormIsValid(emailIsValid && passwordIsValid)
    },[emailIsValid, passwordIsValid])
    const handleSubmit = event => {
        event.preventDefault();
        setName('');
        setEmail('');
        setPassword('');
        setMessage('Login SuccessFul')
        setMessageType('success')
    }
    const nameChangeHandler = event => {
        setName(event.target.value)
    }
    const emailChangeHandler = event => {
        setEmail(event.target.value)
    } 
    const passwordChangeHandler = event => {
        setPassword(event.target.value)
    }
    const validateEmail = () => {
        const isValid = email.includes("@") && email.includes(".")
        setEmailIsValid(isValid)
        if(isValid){
            setMessage('Email is Valid')
            setMessageType('success')
        }else{
            setMessage('Please enter a valid Email')
            setMessageType('error')
        }
    }
    const validatePassword = () => {
        const isValid = password.trim().length > 6
        setPasswordisValid(isValid)
        if (isValid) {
            setMessage('Password is Valid')
            setMessageType('success')
        }else{
            setMessage('Password must not be less than 6 characters')
            setMessageType('error')
    }
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit} className='w-full max-w-lg p-8 bg-gray-500 shadow-2xl rounded-lg shadow-lg '>
            <Notification message={message} type={messageType}/>
                <h2 className='text-center text-2xl text-white font-bold mb-5'>Welcome Back</h2>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3 mb-6 '>
                        <input type='text' 
                        name='name' 
                        onChange={nameChangeHandler} 
                        value={name} 
                        placeholder='Name'
                        autoComplete='current-name' 
                        className='block w-full bg-transparent text-gray-700 px-2 py-2 leading-tight  border-b border-gray-200 focus:outline-0  focus:border-gray-100'
                         required/>
                    </div>
                    <div className='w-full px-3'>
                        <input type='text' 
                        onChange={emailChangeHandler} 
                        onBlur={validateEmail} 
                        name='email' 
                        value={email}
                        placeholder='Email' 
                        autoComplete='current-email'
                        className='block w-full bg-transparent text-gray-700 px-2 py-2 leading-tight  border-b border-gray-200 focus:outline-0  focus:border-gray-100 mb-6' />
                        
                    </div>
                    <div className='w-full px-3'>
                        <input type='password' 
                        onChange={passwordChangeHandler} 
                        onBlur={validatePassword} 
                        name='password' 
                        value={password}
                        placeholder='Password'
                        autoComplete='current-password' 
                        className='block w-full bg-transparent text-gray-700 px-2 py-2 leading-tight  border-b border-gray-200 focus:outline-0  focus:border-gray-100'/>
                       
                    </div>
                </div>    
                <div className='flex justify-center'>
                        <button type='submit' className={`bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded focus:outline-0 focus-shadow-outline ${!formIsValid ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!formIsValid}>Login</button>
                </div> 
            </form>
        </div>
    );
    
 
}
    
    


export default Login;