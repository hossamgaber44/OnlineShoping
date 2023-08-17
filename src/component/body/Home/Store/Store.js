import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../../../../Context/Context'
import './Store.css'
const Store = ({ data, id, imgurl, description, price, name }) => {
    const { increaseCardQuantity, decreaseCardQuantity, getItemsQuantity } = useContext(ShoppingContext)
    const quantity = getItemsQuantity(id)
    return (
        <>
            {data === '' || data === null ?
                <div key={id} className='cartegory'>
                    <div className='cartegory-img'>
                        <img src={imgurl} />
                    </div>
                    <p>{description}</p>
                    <div className='cartegory-information'>
                        <div className='cartegory-btn'>
                            {quantity === 0 ? (
                                <button className='add-to-card' onClick={() => increaseCardQuantity(id)}>Add To Card</button>
                            ) :
                                (
                                    <div className='d-btn'>
                                        <button onClick={() => decreaseCardQuantity(id)}>-</button>
                                        <div className='quantity'>{quantity}</div>
                                        <button onClick={() => increaseCardQuantity(id)} >+</button>
                                    </div>

                                )}
                        </div>
                        <div className='cartegory-price'>
                            <b>${price}</b>
                        </div>
                    </div>
                </div> : <>
                    {data.toLowerCase() === name.toLowerCase() ? <div key={{id}} className='cartegory'>
                        <div className='cartegory-img'>
                            <img src={imgurl} />
                        </div>
                        <p>{description}</p>
                        <div className='cartegory-information'>
                            <div className='cartegory-btn'>
                                {quantity === 0 ? (
                                    <button className='add-to-card' onClick={() => increaseCardQuantity(id)}>Add To Card</button>
                                ) :
                                    (
                                        <div className='d-btn'>
                                            <button onClick={() => decreaseCardQuantity(id)}>-</button>
                                            <div className='quantity'>{quantity}</div>
                                            <button onClick={() => increaseCardQuantity(id)} >+</button>
                                        </div>
                                    )}
                            </div>
                            <div className='cartegory-price'>
                                <b>${price}</b>
                            </div>
                        </div>
                    </div> : ''}</>
            }
        </>
    )
}

export default Store