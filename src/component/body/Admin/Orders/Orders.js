import React, { useContext, useEffect, useState } from 'react'
import './Orders.css'
import OrderInformation from './OrderInformation/OrderInformation'
import { Link } from 'react-router-dom'
import { ShoppingContext } from '../../../../Context/Context'
const Orders = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { orderData } = useContext(ShoppingContext)
    const handeDelet = (id) => {
        fetch("http://localhost:5000/order/" + id, {
            method: 'DELETE',
        })
    }

    return (
        <div className='order-data'>
            <table >
                <tr >
                    <th className='t-head' >firstName</th>
                    <th className='t-head' >lastName</th>
                    <th className='t-head' >Email</th>
                    <th className='t-head' >phone</th>
                    <th className='t-head' >city</th>
                    <th className='t-head' >address</th>
                    <th className='t-head' >gender</th>
                </tr>
                {orderData.map((i) => (
                    <tr className='product-body' key={i.id}>
                        <td className='t-body' >{i.firstName}</td>
                        <td className='t-body' >{i.lastName}</td>
                        <td className='t-body' >{i.id}</td>
                        <td className='t-body' >{i.phone}</td>
                        <td className='t-body' >{i.city}</td>
                        <td className='t-body' >{i.address}</td>
                        <td className='t-body' >{i.gender}</td>
                        <td> <Link to={`/orderInformation/${i.id}`} className='view-btn'>order info</Link> </td>
                        <td> <button onClick={() => handeDelet(i.id)} className='del-btn'>delet</button></td>
                    </tr>
                ))}
            </table>

        </div>
    )
}

export default Orders