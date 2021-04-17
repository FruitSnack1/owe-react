import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import auth from '../auth/auth'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

    const login = async () => {
        await auth.login({ username, password })
        history.push('/app')
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Vítejte zpět!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input onChange={(e) => {
                                                        setUsername(e.target.value)
                                                    }} type="text" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Uživatelské jméno" />
                                                </div>
                                                <div className="form-group">
                                                    <input onChange={(e) => {
                                                        setPassword(e.target.value)
                                                    }} type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Heslo" />
                                                </div>
                                                <button onClick={(e) => {
                                                    e.preventDefault()
                                                    login()
                                                }} href="index.html" className="btn btn-primary btn-user btn-block">
                                                    Přihlásit se
                                                </button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <Link className="small" to="/register">Registrovat se</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
