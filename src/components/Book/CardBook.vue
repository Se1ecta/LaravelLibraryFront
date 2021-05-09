<template>
  <div class="cardbook">
    <img class="img" :src="require('../../assets/img/' + book.image)" />
    <div class="card-inf">
      <p class="book-rating">Рейтинг: {{ book.rating }}</p>
      <p class="title">{{ book.title }}</p>
      <p class="auhtor">{{ book.name }} {{ book.surname }}</p>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
    //   author: {
    //     type: Object,
    //     default() {
    //       return {};
    //     },
    //   },
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getFullName(name, surname){
        return `${name}  ${surname}`
    }
  },
};
</script>

<style scoped>
.cardbook {
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
.cardbook:hover {
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