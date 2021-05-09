import axios from 'axios'

export default {
    state: {
        categories:[]
    },
    actions: {
        async getCategories({commit}){
            await axios.get('http://library:8080/api/categories')
            .then(res =>{
                let categories = res.data
                commit('SUCCESS_GET_CATEGORIES', categories)
            })
            .catch(err =>{
                commit('ERROR_GET_CATEGORIES', err)
            })
        },

    },
    mutations: {
        SUCCESS_GET_CATEGORIES(state, categories){
            state.categories = categories
        },
    },
    getters: {
        categories: state=>state.categories
    },

}