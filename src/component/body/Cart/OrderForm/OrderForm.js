import React, { useContext, useState  } from 'react'
import './OrderForm.css'
import { useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../../../Context/Context'
const OrderForm = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')
    const [id, setId] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('Cairo')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('male')
    const [loading, setLoading] = useState(false)
    const { removeAllItem, cardItems } = useContext(ShoppingContext)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataPost = { firstName, lastName, id, phone, city, address, gender, cardItems };

        fetch("http://localhost:5000/order", {
            method: 'POST',
            body: JSON.stringify(dataPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        alert('Oredr is added')
        navigate('/cart')
        removeAllItem()
        console.log('dataPost');
    }
    return (
        <section className="order-now" >
            <form className="order-now-form" onSubmit={handleSubmit}>
                <div className="data">
                    <label> first Name *</label>
                    <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Your First Name" />
                </div>
                <div className="data">
                    <label>last Name *</label>
                    <input required value={lastName} onChange={(e) => setLasttName(e.target.value)} type="text" placeholder="Your Last Name" />
                </div>
                <div className="data">
                    <label>Email *</label>
                    <input required value={id} onChange={(e) => setId(e.target.value)} type="email" placeholder="Your email" />
                </div>
                <div className="data">
                    <label>Address *</label>
                    <input required value={address} onChange={(e) => setAddress(e.target.value)} type='text' placeholder='Enter The Address' />
                </div>
                <div className="data">
                    <label>phone *</label>
                    <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Enter The Phone Number' />
                </div>
                <div className="data">
                    <label>city *</label>
                    <select value={city} onChange={e => setCity(e.target.value)}>
                        <option value="Cairo" >Cairo</option>
                        <option value="Bani Sweif" >Bani Sweif</option>
                        <option value="Giza" >Giza</option>
                        <option value="Alexandria" >Alexandria</option>
                        <option value="Menoufia" >Menoufia</option>
                        <option value="Fayoum" >Fayoum</option>
                    </select>
                </div>
                <div className="data">
                    <label>gender *</label>
                    <input value='male' checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} className='gender-radio' name='gender' type='radio' />
                    <span>Male</span>
                    <input value='female' checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} className='gender-radio' name='gender' type='radio' />
                    <span>Female</span>
                </div>
                <input type='submit' className="check-btn" value='Check Availability' />
            </form>
        </section>
    )
}

export default OrderForm