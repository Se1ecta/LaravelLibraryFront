<template>
  <div class="category">
    <h1 class="category-title">Категории</h1>
    <span>Количество категорий: {{ categories.length }}</span>
    <ul
      class="category-list"
      v-for="category in categories"
      :key="category.id_category"
    >
      <li class="category-item">
        <router-link active-class="active" to="/" class="category-link">
          {{category.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["categories"]),
  },
  methods: {
    ...mapActions(["getCategories"]),
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style scoped>
.category {
  width: 30%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}
.category-title {
  font-size: 24px;
  padding: 15px 0px 0px 25px;
  margin: 0px;
}
span {
  margin: 0px 0px 0px 25px;
  color: rgba(0, 0, 0, 0.3);
}
.category-list {
  list-style: none;
  padding: 10px 0px 0px 5px;
  margin: 0px;
}
.category-item {
  padding: 0px 0px 5px 20px;
}
.category-link {
  text-decoration: none;
  color: #ffa500;
}
.category-link:hover {
  text-decoration: underline;
}
</style>