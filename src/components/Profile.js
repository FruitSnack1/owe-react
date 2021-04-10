import axios from "axios"

const Profile = () => {

    const fetchUser = async () => {
        const res = await axios.get('http://localhost:3001/users')

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
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Příjmení</label>
                        <input type='text' className='form-control' ></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Uživatelské jméno</label>
                        <input type='text' className='form-control' ></input>
                    </div>
                    <button onClick={(e) => {
                        e.preventDefault()

                    }} type="submit" className="btn btn-primary float-end">Vytvořit inzerát</button>
                </form>
            </div>
        </div>
    )
}

export default Profile