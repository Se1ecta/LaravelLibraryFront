<template>
  <div class="create-book">
    <b-button class="" v-b-modal.modal-prevent-closing variant="primary"
      >Добавить книгу</b-button
    >
    <b-modal id="modal-prevent-closing" ref="modal" title="Добавить книгу">
      <b-container fluid="sm">
        <b-form>
          <b-form-group label="Название книги">
            <b-form-input
              v-model="book.title"
              type="text"
              placeholder="Введите название книги"
              required
            ></b-form-input>
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
              value="id_author"
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
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Рейтинг">
            <b-form-input
              type="text"
              v-model="book.rating"
              placeholder="Введите рейтинг"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Картинка">
            <b-form-input
              type="text"
              v-model="book.image"
              placeholder="Введите название картинки"
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
          @click="addBook(), show()"
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
import { mapActions, mapGetters } from "vuex";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      selected: null,
      value: [],
      category:[],
      book: {
        title: "",
        author: "",
        category: "",
        description: "",
        rating: "",
        image: "",
      },
    };
  },
  computed: {
    ...mapGetters(["authors", "categories"]),
  },
  methods: {
    // selectFile(event) {
    //   // `files` is always an array because the file input may be in multiple mode
    //   this.book.image = event.target.files[0];
    // },
    ...mapActions(["getAuthors", "createBook", "getCategories"]),
    addBook() {
      this.book.author = this.value.id_author
      this.book.category = this.category.id_category
      this.createBook(this.book)
        .then(() => {
          this.$router.push("/catalog");
          this.book = {
            title: "",
            author: "",
            category: "",
            description: "",
            rating: "",
            image: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
    customLabel(author) {
      return `${author.name}  ${author.surname}`;
    },
    fullname({ name, surname }) {
      return `${name} ${surname}`;
    },
    show() {
      console.log(this.book);
    },
  },
  mounted() {
    this.getAuthors();
    this.getCategories();
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style >
.create-book {
  padding: 30px 0px 10px 0px;
}
</style>