import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register = async () => {
        console.log({
            firstname,
            lastname,
            username,
            password
        })
        const user = {
            firstname,
            lastname,
            username,
            password
        }
        axios.post('http://localhost:3001/users/register', user)
        // const users = await axios.get('http://localhost:3001/users')
    }

    return (
        <div>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Vytvořte si účet</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input onChange={(e) => setFirstname(e.target.value)} type="text" className="form-control form-control-user"
                                                placeholder="Jméno" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => setLastname(e.target.value)} type="text" className="form-control form-control-user"
                                                placeholder="Příjmení" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control form-control-user"
                                                placeholder="Uživatelské jméno" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-user"
                                                placeholder="Heslo" />
                                        </div>

                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            register()
                                        }} className="btn btn-primary btn-user btn-block">
                                            Registrovat</button>

                                    </form>
                                    <hr />

                                    <div className="text-center">
                                        <Link className="small" to="/login">Už máte účet? Přihlásit se!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

            <script src="js/sb-admin-2.min.js"></script> */}

        </div>
    )
}

export default Register