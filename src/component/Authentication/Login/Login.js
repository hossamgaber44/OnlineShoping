import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const [userName ,setUserName]=useState('')
    const [password ,setPassword]=useState('')
    const navigate =useNavigate()
    useEffect(()=>{
        sessionStorage.clear();
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if (validate()){
            fetch("http://localhost:5000/user/"+userName).then((res)=>{
                return res.json();
            }).then((resp) => {
    
                if (resp.password === password && resp.password !== '' && resp.password !== null){
                    sessionStorage.setItem('username',userName );
                    sessionStorage.setItem('password',password );
                    navigate('/')
                    toast.success("Success")
                }else{
                    toast.error('Please Enter Valid Password')
                }
            }).catch ((error)=>{
                console.log(error)
            })
        }
    }

    const validate = () => {
        let result =true
        if (userName === ''|| userName === null){
            result = false ;
            toast.error('Please Enter userName')
        }
        return result
    }

    return (
        <div className='login'>
            <form className='form-content' onSubmit={handleSubmit}>
                <h1 className='login-title'>Login</h1>
                <div className='login-form'>
                    <label>user name <span>*</span></label>
                    <input value={userName} onChange={e=>setUserName(e.target.value)} type='text' placeholder='Enter The User Name' />
                    <label>Password <span>*</span></label>
                    <input value={password}  onChange={e=>setPassword(e.target.value)} type='password' placeholder='Enter The Password' />
                </div>
                <div className='footer-form'>
                    <input className='submit-form' type='submit' value='login' />
                    <span> not a member ? <Link to='/register'>register now</Link></span> 
                </div>
            </form>
        </div>
    )
}

export default Login