<template>
  <div class="catalog-content">
    <div class="catalog-content-container">
      <div class="catalog-header">
        <h1>Книги</h1>
        <span>Количество книг: {{ books.length }}</span>
      </div>
      <CatalogList />
    </div>
    <div class="catalog-content-container">
      <div class="catalog-header">
        <h1>Авторы</h1>
        <span>Количество авторов:{{authors.length}}</span>
        <AuthorList />
      </div>
    </div>
  </div>
</template>

<script>
import CatalogList from "./CatalogList";
import AuthorList from "../Author/AuthorList";
import { mapGetters } from "vuex";
export default {
  components: {
    CatalogList,
    AuthorList,
  },
  computed: {
    ...mapGetters(["books", "authors"]),
  },
};
</script>

<style scoped>
.catalog-content {
  width: 100%;
  height: 100%;
}
.catalog-content-container {
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-left: 40px;
}
.catalog-header {
  margin: 25px;
}
h1 {
  margin: 0;
}
span {
  color: rgba(0, 0, 0, 0.3);
}
</style>