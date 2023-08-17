import React, { useContext, useState } from 'react'
import { ShoppingContext } from '../../../Context/Context'
import './Admin.css'
import { Link } from 'react-router-dom'
const Admin = () => {
    const { items ,handeDelet } = useContext(ShoppingContext)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imgurl, setImgurl] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataPost = { name, price, imgurl, description };
        setLoading(true)
        setTimeout(() => {
            fetch("http://localhost:5000/items", {
                method: 'POST',
                body: JSON.stringify(dataPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            setLoading(false)
            setName('')
            setPrice('')
            setImgurl('')
            setDescription('')
            console.log('data is Post');
        }, 2000);
    }
    
    return (
        <div className='display-product'>
            <table >
                <tr >
                    <th className='t-head' >name</th>
                    <th className='t-head' >price</th>
                    <th className='t-head' >image</th>
                    <th className='t-head' >description</th>
                </tr>
                {items.map((i) => (
                    <tr className='product-body' key={i.id}>
                        <td className='t-body' >{i.name}</td>
                        <td className='t-body' >{i.price}</td>
                        <td className='t-body' >{i.imgurl}</td>
                        <td className='t-body' >{i.description}</td>
                        <td> <button onClick={() => handeDelet(i.id)} className='del-btn'>delet</button></td>
                        <td><Link to={`/editProduct/${i.id}`} className='edit-btn' >Edit</Link ></td>
                    </tr>
                ))}
            </table>
            <form className='product-form' onSubmit={handleSubmit}>
               
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
                {!loading ? <button type='submit' className='add-btn'>Add</button>
                    : <button type='submit' className='add-btn-wait'>Wait</button>}
            </form>
            
           
        </div>
    )
}

export default Admin