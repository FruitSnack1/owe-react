import axios from "axios"
import { useEffect, useState } from "react"

const Profile = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const res = await axios.get('/users', {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
        setUsername(res.data.username)
        setEmail(res.data.email)
        setPhone(res.data.phone)
    }

    const editUser = async () => {
        await axios.put('/users', {
            username,
            email,
            phone
        }, {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
    }

    return (
        <div className='card shadow'>
            <div className='card-header py-3'>
                <h6 className='m-0 font-weight-bold text-primary'>Upravit profil</h6>
            </div>
            <div className='card-body'>
                <form>
                    <div className='form-group'>
                        <label className='form-label'>Uživatelské jméno</label>
                        <input onChange={(e) => setUsername(e.target.value)} type='text' className='form-control' value={username}></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type='text' className='form-control' value={email}></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Telefon</label>
                        <input onChange={(e) => setPhone(e.target.value)} type='text' className='form-control' value={phone}></input>
                    </div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        editUser()
                    }} type="submit" className="btn btn-primary float-end">Upravit profil</button>
                </form>
            </div>
        </div>
    )
}

export default Profile