<template>
  <b-row class="ma-20px">
    <b-table-simple v-if="books.length" style="width: 90%">
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>ID</b-th>
          <b-th>Title</b-th>
          <b-th>Author</b-th>
          <b-th>Category</b-th>
          <b-th></b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="book in books" :key="book.id">
          <b-td>
            {{book ? book.id :''}}
          </b-td>
          <b-td>
            {{ book.title }}
          </b-td>
          <b-td>
            {{book.author? getFullName(book):'' }}
          </b-td>
          <b-td>
            {{book.category? book.category:'' }}
          </b-td>
          <b-td class="d-flex justify-content-center">
            <router-link
              :to="{ name: 'EditBook', params: { id: book.id } }"
              class="btn btn-success"
              >Редактировать
            </router-link>
            <b-button
              class="ml-1"
              @click.prevent="deleteBook(book.id)"
              variant="danger"
            >
              Удалить
            </b-button>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <p v-else>Нет книг в БД</p>
  </b-row>
</template>

<script>

import {  mapActions, mapGetters } from "vuex";
// import UpdateBook from "./UpdateBook";
export default {
  components: {
    // UpdateBook,
  },
  data() {
    return {
      boxTwo: "",
      loading: false,
    };
  },
  computed:{
    ...mapGetters(['books'])
  },
  methods: {
    ...mapActions(["getBooks", "deleteBook"]),
    editBook(id) {
      this.$router.push({
        to: "edit-book",
        params: { id: id },
      });
    },
    getFullName(book){
      return `${book.name} ${book.surname}`
    },
  },
  //   computed: {
  //   ...mapGetters(["books"]),
  // },
  mounted(){
    this.getBooks()
  }
};
</script>

<style>
</style>