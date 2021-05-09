import axios from 'axios'



export default {
    state: {
        books:[]
    },
    actions: {
        async getBooks({commit}){
            await axios.get('http://library:8080/api/books')
            .then(res =>{
                let books = res.data
                commit('SUCCESS_GET_BOOKS', books)
            })
            .catch(err =>{
                commit('ERROR_GET_BOOKS', err)
            })
        },
        async createBook({commit}, book){
            console.log(book)
            await axios.post('http://library:8080/api/books', book)
            .then(()=>{
                commit('CREATED_BOOK', book)
            })
            .catch(err=>{
                console.log(err.response.data.message)
                commit('ERROR_CREATE_BOOK', err)
            })
        },
        async deleteBook({commit}, id){
            await axios.delete(`http://library:8080/api/books/${id}`)
            .then(() =>{
                commit('DELETED_BOOK', id)
            })
            .catch(err=>{
                commit('ERROR_DELETE_BOOK', err)
            })
        },
        async updateBook({commit}, book){
            await axios.put(`http://library:8080/api/books/${book.id}`, book)
            .then((res)=>{
                console.log(res)
                commit('UPDATED_BOOK', res)
            })
            .catch(err=>{
                commit('ERROR_UPDATE_BOOK',err)
            })
        }
        

    },
    mutations: {
        SUCCESS_GET_BOOKS(state, books){
            state.books = books
        },
        CREATED_BOOK(state, book){
            state.books.unshift(book)
        },
        DELETED_BOOK(state, id){
            let indexOfArrayItem = state.books.findIndex((i) => i.id === id)
            state.books.splice(indexOfArrayItem, 1)
        },
        UPDATED_BOOK(state, msg) {
            state.statusBook = msg

        },

    },
    getters: {
        books: state => state.books
    },

}