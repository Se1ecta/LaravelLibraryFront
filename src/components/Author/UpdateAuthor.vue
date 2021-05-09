<template>
  <div class="update-author">
    <h1>Редактировать автора</h1>
    <b-container fluid="sm">
    <b-form>
      <b-form-group label="Имя автора">
        <b-form-input
          v-model="author.name"
          type="text"
          placeholder="Введите имя автора"
          required
        >{{author.name}}</b-form-input>
      </b-form-group>
      <b-form-group label="Фамилия автора">
        <b-form-input
          v-model="author.surname"
          type="text"
          placeholder="Введите фамилию автора"
          required
        >{{author.surname}}</b-form-input>
      </b-form-group>
      <b-form-group label="Дата рождения автора">
        <b-form-input
          v-model="author.date_of_birth"
          type="text"
          placeholder="Введите дату рождения автора"
          required
        >{{author.date_of_birth}}</b-form-input>
      </b-form-group>
      <b-form-group label="Дата смерти автора">
        <b-form-input
          v-model="author.date_of_death"
          type="text"
          placeholder="Введите дату смерти автора"
          required
        >{{author.date_of_death}}</b-form-input>
      </b-form-group>
      <b-form-group label="Фотография автора">
        <b-form-input
          v-model="author.image"
          type="text"
          placeholder="Введите название фотографии"
          required
        >{{author.image}}</b-form-input>
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
        class="mr-3"
        @click.prevent="updateAuthor()"

        >Сохранить</b-button
      >
      <b-button type="reset" variant="danger">Сбросить</b-button>
    </b-form>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      author:{}
    }
  },
  created() {
    let URL = `http://localhost:3000/api/authors/edit-author/${this.$route.params.id}`;
    axios
    .get(URL)
    .then((res) => {
      this.author = res.data;
    });
  },
  methods:{
    updateAuthor() {
      let URL = `http://localhost:3000/api/authors/update-author/${this.$route.params.id}`;
      axios
        .put(URL, this.author)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
};
</script>

<style scoped>
.update-author {
  padding: 100px 0px 0px 40px;
}
h1 {
  margin: 0px 0px 20px 20px;
}
</style>