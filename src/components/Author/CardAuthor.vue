<template>
  <div class="card-author">
    <img :src="require('../../assets/img/authors/' + author.image)" alt="img" />
    <div class="author-inf">
      <p>{{ author.name + " " + author.surname }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    SendDataAuthor() {
      this.$emit("send", this.book);
    },
  },
};
</script>

<style scoped>
.card-author {
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 20px;
  margin-bottom: 25px;
  margin-right: 25px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 220px;
  height: 380px;
}
.card-author:hover {
  box-shadow: 0px 4px 10px rgba(112, 187, 210);
}
.img {
  width: 100%;
  height: 70%;
}
p {
  margin: 5px;
}
</style>