<template>
  <div class="catalog-list">
    <div class="catalog-list-container">
      <CardBook
        v-for="book in books"
        :key="book.id"
        :book="book"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardBook from "../Book/CardBook";

export default {
  data() {
    return {
      loading: false,
    };
  },
  components: {
    CardBook,
  },
  computed: {
    ...mapGetters(["books"]),
  },
  methods: {
    ...mapActions(["getBooks"]),
  },

  mounted() {
    this.getBooks();
  },
};
</script>

<style scoped>
.catalog-list-container {
  display: flex;
  padding: 15px 30px;
  flex-wrap: wrap;
}
</style>