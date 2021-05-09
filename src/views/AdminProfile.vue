<template>
  <div class="admin-profile">
    <div class="admin-profile-content">
      <b-card >
        <b-tabs card   >
          <b-tab title="Книги" active>
            <b-card-text>
              <CreateBook />
              <BookList />
            </b-card-text>
          </b-tab>
          <!-- <b-tab title="Авторы">
            <b-card-text>
              <CreateAuthor/>
              <TableAuthors/>
            </b-card-text>
          </b-tab> -->
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import CreateBook from "../components/Book/CreateBook";
import BookList from "../components/Book/ListBook";
import axios from "axios";
export default {
  components: {
    BookList,
    CreateBook,
  },
  data() {
    return {
      modalShow: false,
      nameState: null,
      submittedNames: [],
      book: {
        title: "",
        author: "",
        category: "",
        date_create: "",
        description: "",
        rating: "",
        image: "",
      },
    };
  },
  methods: {
    addBook() {
      const URL = "http://localhost:3000/api/books/add-book";
      axios
        .post(URL, this.book)
        .then(() => {
          this.$router.push("./catalog");
          this.book = {
            title: "",
            author: "",
            category: "",
            date_create: "",
            description: "",
            rating: "",
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
.admin-profile {
  padding: 100px 0px 0px 40px;
}
</style>