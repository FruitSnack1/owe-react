import axios from "axios"
import { useEffect, useState } from "react"

const Profile = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const res = await axios.get('/users', {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
        setFirstname(res.data.firstname)
        setLastname(res.data.lastname)
        setUsername(res.data.username)
    }

    const editUser = async () => {
        const res = await axios.put('/users', {
            firstname,
            lastname,
            username
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
                        <label className='form-label'>Jméno</label>
                        <input onChange={(e) => { setFirstname(e.target.value) }} type='text' className='form-control' value={firstname}></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Příjmení</label>
                        <input onChange={(e) => { setLastname(e.target.value) }} type='text' className='form-control' value={lastname}></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Uživatelské jméno</label>
                        <input onChange={(e) => { setUsername(e.target.value) }} type='text' className='form-control' value={username}></input>
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