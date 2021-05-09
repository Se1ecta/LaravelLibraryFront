<template>
  <div class="update-book">
    <h1>Редактир книгу</h1>
    <b-container fluid="sm">
      <b-form>
        <b-form-group label="Название книги">
          <b-form-input
            v-model="book.title"
            type="text"
            placeholder="Введите название книги"
            required
            >{{ book.title }}</b-form-input
          >
        </b-form-group>
        <b-form-group label="Автор">
          <multiselect
            v-model="value"
            :options="authors"
            :searchable="true"
            :close-on-select="true"
            :show-labels="false"
            :custom-label="customLabel"
            value="id_author"
            placeholder="Выберите автора"
          >
          </multiselect>
        </b-form-group>
        <b-form-group label="Категория">
          <multiselect
            v-model="category"
            :options="categories"
            :searchable="true"
            :close-on-select="true"
            :show-labels="false"
            label="title"
            value="id_category"
            placeholder="Выберите категорию"
          >
          </multiselect>
        </b-form-group>
        <b-form-group label="Описание">
          <b-form-input
            type="text"
            v-model="book.description"
            placeholder="Введите описание"
            required
            >{{ book.description }}</b-form-input
          >
        </b-form-group>
        <b-form-group label="Рейтинг">
          <b-form-input
            type="text"
            v-model="book.rating"
            placeholder="Введите рейтинг"
            required
            >{{ book.rating }}</b-form-input
          >
        </b-form-group>
        <b-form-group label="Картинка">
          <b-form-input
            type="text"
            v-model="book.image"
            placeholder="Введите название картинки"
            required
          ></b-form-input>
        </b-form-group>
        <b-button
          type="submit"
          variant="primary"
          class="mr-3"
          @click.prevent="upBook()"
          >Сохранить</b-button
        >
        <b-button type="reset" variant="danger">Сбросить</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      book: {},
      value: [],
      category: [],
    };
  },
  created() {
    let URL = `http://library:8080/api/books/${this.$route.params.id}`;

    axios.get(URL).then((res) => {
      this.book = res.data;
    });
  },
  computed: {
    ...mapGetters(["authors", "categories"]),
  },
  methods: {
    ...mapActions(["getAuthors", "getCategories", "updateBook"]),
    upBook() {
      this.book.author = this.value.id_author;
      this.book.category = this.category.id_category;
      this.updateBook(this.book);
      this.$router.push("/catalog");
    },
    customLabel({ name, surname }) {
      return `${name}  ${surname}`;
    },
  },
  mounted() {
    this.getAuthors();
    this.getCategories();
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.update-book {
  padding: 100px 0px 0px 40px;
}
h1 {
  margin: 0px 0px 20px 20px;
}
</style>