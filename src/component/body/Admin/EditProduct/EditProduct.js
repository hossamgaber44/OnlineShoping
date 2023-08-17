import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {ShoppingContext} from '../../../../Context/Context'
import  './EditProduct.css'
const EditProduct = () => {
    const {items}=useContext(ShoppingContext)
    const {id}=useParams()
    const data = (items.find((i)=>i.id === +id))||(items.find((i)=>i.id === id))
    const [Id, setId] = useState(id)
    const [name, setName] = useState(data.name)
    const [price, setPrice] = useState(data.price)
    const [imgurl, setImgurl] = useState(data.imgurl)
    const [description, setDescription] = useState(data.description)
    const [loading, setLoading] = useState(false)
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataPost = { name, price, imgurl, description };
        setLoading(true)
        setTimeout(() => {
            fetch("http://localhost:5000/items/"+ Id, {
                method: 'PUT',
                body: JSON.stringify(dataPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            setName('')
            setPrice('')
            setImgurl('')
            setDescription('')
            setLoading(false)
            navigate('/addproduct')
            console.log('data is edit');
        }, 2000);
    }
    
  return (
    <div className='edit-product'>
        {loading ? <h2  className='edit-title'>Please Wait to load data...</h2>:''}
      <form className='edit-form' onSubmit={handleSubmit}>
               <input type='text' placeholder='Enter Prouct Name'
                   required value={name}
                   onChange={(e) => setName(e.target.value)} />

               <input type='number' placeholder='Enter Prouct Price'
                   required value={price}
                   onChange={(e) => setPrice(e.target.value)} />

               <input type='text' placeholder='Enter Prouct Image Url'
                   required value={imgurl}
                   onChange={(e) => setImgurl(e.target.value)} />

               <input type='text' placeholder='Enter Prouct Description'
                   required value={description}
                   onChange={(e) => setDescription(e.target.value)} />
               {!loading ? <button type='submit' className='edit-btn'>Edit</button>
                   : <button type='submit' className='edit-btn-wait'>Wait</button>}
           </form>
    </div>
  )
}

export default EditProduct