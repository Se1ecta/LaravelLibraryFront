import axios from 'axios'

export default {
    state: {
        authors: []
    },
    actions: {
        async getAuthors({ commit }) {
            await axios.get('http://library:8080/api/authors')
                .then(res => {
                    let authors = res.data
                    commit('SUCCESS_GET_AUTHORS', authors)
                })
                .catch(err => {
                    commit('ERROR_GET_AUTHORS', err)
                })

        },
        
    },
    mutations: {
        SUCCESS_GET_AUTHORS(state, authors) {
            state.authors = authors
        },
    },
    getters: {
        authors: state=>state.authors
    },

}