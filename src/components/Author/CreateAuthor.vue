<template>
  <div class="create-author">
    <b-button class="ml--55" v-b-modal.add-author variant="primary"
      >Добавить автора</b-button
    >
    <b-modal id="add-author" ref="modal" title="Добавить автора">
      <b-container fluid="sm">
        <b-form>
          <b-form-group label="Имя автора">
            <b-form-input
              v-model="author.name"
              type="text"
              placeholder="Введите имя автора"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Фамилия автора">
            <b-form-input
              v-model="author.surname"
              type="text"
              placeholder="Введите фамилию автора"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Дата рождения автора">
            <b-form-input
              v-model="author.date_of_birth"
              type="text"
              placeholder="Введите дату рождения автора"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Дата смерти автора">
            <b-form-input
              v-model="author.date_of_death"
              type="text"
              placeholder="Введите дату смерти автора"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Фотография автора">
            <b-form-input
              v-model="author.image"
              type="text"
              placeholder="Введите название фотографии"
              required
            ></b-form-input>
          </b-form-group>
         
        </b-form>
      </b-container>
      <template #modal-footer="{ cancel }">
        <b-button
          type="submit"
          size="sm"
          variant="success"
          @click.prevent="createAuthor()"
        >
          Добавть
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Закрыть 
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      author: {
        name: "",
        surname: "",
        date_of_birth: "",
        date_of_death: "",
        image: "",
      },
    };
  },
  methods: {
    createAuthor() {
      const URL = "http://localhost:3000/api/authors/create-author";
      axios
        .post(URL, this.author)
        .then(() => {
          this.$router.push("./");
          this.author = {
            name: "",
            surname: "",
            date_of_birth: "",
            date_of_death: "",
            image: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.create-author{
    margin: 5px;
}
</style>