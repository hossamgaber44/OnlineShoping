import react, { useContext, useEffect, useState } from 'react'
import './Home.css';
import Store from './Store/Store';
import { ShoppingContext } from '../../../Context/Context'
const Home = () => {
    const {items } = useContext(ShoppingContext)
    const [value, setValue] = useState('')
    useEffect(()=>{},[items])
    useEffect(() => {
        window.scrollTo(0,0)
      },[]);
    return (
        <div className='container'>
            <h1 className='store-hedeer'>Store</h1>
            <div className='search'>
                <div className='search-input'>
                    <input value={value} onChange={(e) => setValue(e.target.value)} type='text' placeholder='Enter data On Search...' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className='dropdown'>
                    {items.filter((i) => {
                        const searchTerm = value.toLowerCase();
                        const itemName = i.name.toLowerCase();
                        return searchTerm && itemName.startsWith(searchTerm) && itemName !== searchTerm
                    }).slice(0,8).map((item) => (
                        <h4 key={item.id} onClick={() => setValue(item.name)}>{item.name}</h4>
                    ))}
                </div>
            </div>
            <div className='store-content'>
                {items.map((i) => (
                    <Store data={value}  {...i} key={i.id} />
                ))}
            </div>
        </div>
    )
}
export default Home