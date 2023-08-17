import React, { useEffect, useState } from 'react'
import './Users.css'
const Users = () => {
    const [userData, setUserData] = useState([])
    async function fetchUserData() {
        try {
            const response = await fetch("http://localhost:5000/user");
            const data = await response.json();
            setUserData(data);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    useEffect(() => {
        window.scrollTo(0,0)
      },[]);
    const handeDelet =(id)=>{
        fetch("http://localhost:5000/user/"+id, {
                method: 'DELETE',})
    }

    return (
        <div className='user-data'>
            <table >
                <tr >
                    <th className='t-head' >User Name</th>
                    <th className='t-head' >password</th>
                    <th className='t-head' >fullName</th>
                    <th className='t-head' >email</th>
                    <th className='t-head' >phone</th>
                    <th className='t-head' >city</th>
                    <th className='t-head' >address</th>
                    <th className='t-head' >gender</th>
                </tr>
                {userData.map((i) => (
                    <tr className='product-body' key={i.id}>
                        <td className='t-body' >{i.id}</td>
                        <td className='t-body' >{i.password}</td>
                        <td className='t-body' >{i.fullName}</td>
                        <td className='t-body' >{i.email}</td>
                        <td className='t-body' >{i.phone}</td>
                        <td className='t-body' >{i.city}</td>
                        <td className='t-body' >{i.address}</td>
                        <td className='t-body' >{i.gender}</td>
                        <td> <button onClick={() => handeDelet(i.id)} className='del-btn'>delet</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Users