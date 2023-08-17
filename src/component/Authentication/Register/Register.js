import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { useContext } from 'react'
import { ShoppingContext } from '../../../Context/Context'
import { toast } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate()
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('Cairo')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('male')
    const [loading, setLoading] = useState(false)
    const { user } = useContext(ShoppingContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataPost = { id, password, fullName, email, phone, city, address, gender };
        setLoading(true)
        setTimeout(() => {
            if (validate()) {
                fetch("http://localhost:5000/user", {
                    method: 'POST',
                    body: JSON.stringify(dataPost),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
                    setLoading(false)
                    setPassword('')
                    setId('')
                    navigate('/login');
            }
        }, 2000);

    }
    const validate = () => {
        let result = true
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){}else{
            result = false; 
            toast.error('Please Enter valid email')
            setLoading(false)
        }
        user.map(i => {
            if (id === i.id) {
                result = false;
                toast.error('Please Enter valid userName')
                setLoading(false)
            }
        })
        return result
    }
    return (
        <div className='register'>
            <div className='form-content'>
                <h1 className='register-title'>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className='register-form'>
                        <div className='form-input'>
                            <h3>user name <span>*</span></h3>
                            <input required value={id} onChange={(e) => setId(e.target.value)} type='text' placeholder='Enter User Name' />
                        </div>
                        <div className='form-input'>
                            <h3>password <span>*</span></h3>
                            <input required value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter The Password' />
                        </div>
                        <div className='form-input'>
                            <h3>full name <span>*</span></h3>
                            <input required value={fullName} onChange={(e) => setFullName(e.target.value)} type='text' placeholder='Enter The Full Name' />
                        </div>
                        <div className='form-input'>
                            <h3>email <span>*</span></h3>
                            <input required value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter The Email' />
                        </div>
                        <div className='form-input'>
                            <h3>phone <span>*</span></h3>
                            <input required value={phone} onChange={(e) => setPhone(e.target.value)} type='text' placeholder='Enter The Phone Number' />
                        </div>
                        <div className='form-input'>
                            <h3>City <span>*</span></h3>
                            <select value={city} onChange={e => setCity(e.target.value)}>
                                <option value="Cairo" >Cairo</option>
                                <option value="Bani Sweif" >Bani Sweif</option>
                                <option value="Giza" >Giza</option>
                                <option value="Alexandria" >Alexandria</option>
                                <option value="Menoufia" >Menoufia</option>
                                <option value="Fayoum" >Fayoum</option>
                            </select>
                        </div>
                        <div className='form-input-address'>
                            <h3>address <span>*</span></h3>
                            <textarea required value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter The Address' />
                        </div>
                        <div className='form-input'>
                            <h3>gender <span>*</span></h3>
                            <input value='male' checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} className='gender-radio' name='gender' type='radio' />
                            <label>Male</label>
                            <input value='female' checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} className='gender-radio' name='gender' type='radio' />
                            <label>Female</label>
                        </div>
                    </div>
                    <div className='footer-form'>
                        {!loading ? <input className='submit-form' type='submit' value='register' /> :
                            <input className='submit-form-wait' type='submit' value='wait' />}
                        <span> already a member ? <Link to='/login'>Login here</Link></span>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Register