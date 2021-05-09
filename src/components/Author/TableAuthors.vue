<template>
  <div class="table-author">
    <b-row class="ma-20px">
      <b-table-simple style="width: 90%">
        <b-thead head-variant="dark">
          <b-tr>
            <b-th>ID</b-th>
            <b-th>Surnmae</b-th>
            <b-th>Name</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="author in authors" :key="author._id">
            <b-td>
              {{ author._id }}
            </b-td>
            <b-td>
              {{ author.surname }}
            </b-td>
            <b-td>
              {{ author.name }}
            </b-td>

            <b-td class="d-flex justify-content-center">
              <router-link
                :to="{ name: 'EditAuthor', params: { id: author._id } }"
                class="btn btn-success"
                >Редактировать
              </router-link>
              <b-button
                class="ml-1"
                @click.prevent="deleteAuthor(author._id)"
                variant="danger"
              >
                Удалить
              </b-button>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
// import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      authors: {},
    };
  },
  created() {
    const URL = "http://localhost:3000/api/authors";
    axios
      .get(URL)
      .then((res) => {
        this.authors = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
    deleteAuthor(id){
      const URL = `http://localhost:3000/api/authors/delete-author/${id}`
      const indexOfArrayItem = this.authors.findIndex((i)=> i._id === id)
      axios
      .delete(URL)
      .then(()=>{
        this.authors.splice(indexOfArrayItem, 1)
      })
       .catch((error) => {
          console.log(error);
        });
    }
  }
  // computed:{
  //   ...mapGetters(["authors"])
  // }
};
</script>

<style>
</style>