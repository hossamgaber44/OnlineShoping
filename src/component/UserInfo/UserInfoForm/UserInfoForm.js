import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './UserInfoForm.css'
import { ShoppingContext } from '../../../Context/Context'
const UserInfoForm = () => {
    const { user } = useContext(ShoppingContext)
    let username = sessionStorage.getItem('username');
    const userData = user.find((i) => i.id === username)
    const navigate = useNavigate()
    const [id, setId] = useState(userData?.id)
    const [password, setPassword] = useState(userData?.password)
    const [fullName, setFullName] = useState(userData?.fullName)
    const [email, setEmail] = useState(userData?.email)
    const [phone, setPhone] = useState(userData?.phone)
    const [city, setCity] = useState(userData?.city)
    const [address, setAddress] = useState(userData?.address)
    const [gender, setGender] = useState(userData?.gender)
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataPost = { id, password, fullName, email, phone, city, address, gender };
        setLoading(true)
        setTimeout(() => {
            fetch("http://localhost:5000/user/" + userData?.id, {
                method: 'PUT',
                body: JSON.stringify(dataPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            setLoading(false)
            navigate('/userInfo');
        }, 500);
    }


    return (
        <div className='UserInfoForm'>
            <div className='form-content'>
                <h1 className='UserInfoForm-title'>Chang information</h1>
                <form onSubmit={handleSubmit}>
                    <div className='UserInfoForm-form'>
                        <div className='form-input'>
                            <h3>user name <span>*</span></h3>
                            <input required value={id} type='text' placeholder='Enter User Name' />
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
                                <option value="Alexandria" >Alexandria</option>
                                <option value="Cairo" >Cairo</option>
                                <option value="Bani Sweif" >Bani Sweif</option>
                                <option value="Giza" >Giza</option>

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
                        {!loading ? <input className='submit-form' type='submit' value='Confirm' /> :
                            <input className='submit-form-wait' type='submit' value='wait' />}
                        <Link className='back-form' to='/userInfo' >Back</Link>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default UserInfoForm