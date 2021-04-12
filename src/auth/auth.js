import axios from "axios"

class Auth {
    constructor() {
        this.authenticated = false
        this.userId = 'false'
        this.username = ''
    }

    async login(data, cb) {

        const { username, password } = data
        this.authenticated = true
        const res = await axios.post('/users/login', { username, password })
        console.log(res.data)
        const { accesstoken } = res.data
        window.localStorage.setItem('accesstoken', accesstoken)
        this.username = res.data.username
        this.userId = res.data.id
        return
    }

    logout(cb) {
        localStorage.clear()
        this.authenticated = false
        window.location.href = '/login'
    }

    isAuthenticated() {
        return !!localStorage.getItem('accesstoken')
    }

    getUserId() {
        return this.userId
    }

    getUsername() {
        return this.fullname
    }
}

export default new Auth()
