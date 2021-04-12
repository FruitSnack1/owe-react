import axios from "axios"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    let history = useHistory()

    const register = async () => {
        const user = {
            username,
            password,
            email,
            phone
        }
        await axios.post('http://localhost:3001/users/register', user)
        history.push('/login')
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
                                            <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control form-control-user"
                                                placeholder="Uživatelské jméno" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control form-control-user"
                                                placeholder="E-mail" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control form-control-user"
                                                placeholder="Telefoní číslo" />
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