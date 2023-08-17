import React, { useContext, useState } from 'react'
import '../Orders.css'
import './OrderInformation.css'
import { ShoppingContext } from '../../../../../Context/Context'
import { useParams } from 'react-router-dom'
const OrderInformation = () => {
    const { items, orderData } = useContext(ShoppingContext)
    const { id } = useParams()
    let totalPrice = 0
    return (
        <>
            <table className='order-data' style={{ width: 'fit-content', margin: 'auto' }}>
                <tr>
                    <th className='t-head' >name</th>
                    <th className='t-head' >Product price</th>
                    <th className='t-head' >quantity</th>
                    <th className='t-head' >price</th>
                </tr>
                {orderData.map((c) => (
                    <div key={c.id} >
                        {c.id === id && (c.cardItems.map((i) => (
                            <div key={i.id} >
                                {items.map((item) => (
                                    <div key={item.id} style={{ width: ' fit-content', margin: 'auto' }} >
                                        {i.id === item.id &&
                                            <tr>
                                                <td className='t-body' >{item.name}</td>
                                                <td className='t-body' >{item.price}</td>
                                                <td className='t-body' >{i.quantity}</td>
                                                <td className='t-body' >{item.price * i.quantity}</td>
                                                <span className='hidden-price' >{totalPrice += item.price * i.quantity}</span>
                                            </tr>
                                        }
                                    </div>
                                ))}
                            </div>
                        )))}
                    </div >
                ))}
            </table>
            <div className='totalprice'>
                <span className='total-price-title'>total price : </span>
                <span className='total-price-content' >${totalPrice}</span>
            </div>
        </>
    )
}

export default OrderInformation