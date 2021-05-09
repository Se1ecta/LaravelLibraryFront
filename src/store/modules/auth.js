import axios from 'axios'
import router from '../../router'

axios.defaults.baseURL = 'http://library:8080/api'

export default {
    state: {
        token: localStorage.getItem('access_token') || null,
        authStatus: ''
    },
    actions: {
        async login({ commit }, user) {
            await axios.post('/login', user)
                .then(res => {
                    console.log(res)
                    const token = res.data.access_token
                    localStorage.setItem('access_token', token)
                    commit('AUTH_SUCCESS', token)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async register({ commit }, data) {
            await axios.post('/register', {
                name: data.name,
                email: data.email,
                password: data.password
            })
                .then(res => {
                    commit('REGISTER_SUCCESS', res)
                })
                .catch(err => {
                    console.log('REGISTER_ERROR', err)
                })

        },
        async logout({ commit }) {

            localStorage.removeItem('token')
            commit('LOGOUT')
            axios.defaults.headers.common['Authorization']
            router.push('/login')


        }

    },
    mutations: {
        AUTH_SUCCESS(state, token) {
            state.token = token
        },
        LOGOUT(state) {
            state.token = ''
        },
        REGISTER_SUCCESS(state) {
            state.authStatus = 'success'
        },

    },
    getters: {
        isLoggedIn: state => !!state.token,

    },

}