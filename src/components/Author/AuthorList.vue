<template>
  <div class="author-list">
      <CardAuthor
        v-for="author in authors"
        :key="author._id"
        :author="author"
      />
  </div>
</template>

<script>
import {mapActions, mapGetters } from "vuex";
import CardAuthor from "./CardAuthor";
export default {
  components: {
    CardAuthor,
  },

  computed: {
    ...mapGetters(["authors"]),
  },
  methods:{
    ...mapActions(["getAuthors"])
  },
  mounted(){
    this.getAuthors()
  }
  
};
</script>

<style scoped>
.author-list {
  display: flex;
  padding: 15px 30px;
  flex-wrap: wrap;
}
</style>