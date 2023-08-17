import React, { useContext, useEffect } from 'react'
import { ShoppingContext } from '../../../Context/Context'
import './Cart.css'
import { Link } from 'react-router-dom'
const Cart = () => {
    const { cardItems, CartQuantity, items, removeItem, increaseCardQuantity, decreaseCardQuantity } = useContext(ShoppingContext);
    useEffect(() => {
        window.scrollTo(0,0)
      },[]);
    return (
        <>
            {CartQuantity > 0 ? <h1 className='cartItems' >Cart Items</h1>
                : <>
                    <h1 className='cartItems' ><i class="fa-solid fa-circle-exclamation"></i>The Cart IS Impty</h1>
                    <Link className='add-product' to='/'>Add product</Link>
                </>}
            {
                cardItems.map((i) => (
                    <div key={i.id}>
                        {items.map((item) => (
                            <div key={item.id}>
                                {i.id === item.id && i.quantity != 0 ?
                                    <div className='product'>
                                        <div className='product-img'>
                                            <div className='image'>
                                                <img src={item.imgurl} />
                                            </div>
                                            <div className='product-img-title'>
                                                <h3>{item.name}</h3>
                                                <h5>${item.price}</h5>
                                            </div>
                                        </div>
                                        <div className='product-information'>
                                            <div className='product-btn'>
                                                <button onClick={() => decreaseCardQuantity(item.id)}>-</button>
                                                <div className='quantity'>{i.quantity}</div>
                                                <button onClick={() => increaseCardQuantity(item.id)} >+</button>
                                            </div>
                                            <h3>${item.price * i.quantity}</h3>
                                            <button className='remove-product' onClick={() => removeItem(item.id)} >DELETE</button>
                                        </div>
                                    </div>
                                    : ''}
                            </div>
                        ))}
                    </div>
                ))
            }
            <div className='total-price'>
                <h2>Cart Summary</h2>
                <div className='price'>
                    <span>SubTotal</span>
                    <span>
                        ${
                            cardItems.reduce((total, cartitem) => {
                                const item = items.find((i) => i.id === cartitem.id);
                                return total + (item?.price || 0) * cartitem.quantity
                            }, 0)
                        }
                    </span>
                </div>
                {CartQuantity > 0 ? <Link to='/orderform' className='total-price-btn' >Check Out</Link>
                    : <Link to='/' className='total-price-btn' >Add products</Link>}
            </div>
        </>

    )
}

export default Cart