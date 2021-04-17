import axios from "axios"

class Auth {
    async login(data) {
        const { username, password } = data
        const res = await axios.post('/users/login', { username, password })
        const { accesstoken, id } = res.data
        window.localStorage.setItem('accesstoken', accesstoken)
        window.localStorage.setItem('id', id)
        window.localStorage.setItem('username', res.data.username)
        return
    }

    isAuthenticated() {
        return !!localStorage.getItem('accesstoken')
    }

    getUserId() {
        return localStorage.getItem('id')
    }

    getUsername() {
        return localStorage.getItem('username')
    }
}

export default new Auth()
