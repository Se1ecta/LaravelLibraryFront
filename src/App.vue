<template>
  <div id="app">
    <Navigation/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>


<script>
import Navigation from "@/components/Navigation.vue"

export default {
  components:{
    Navigation,
  }
}
</script>


<style scoped>
.main{
  padding: 100px 40px 0px 40px;
}
</style>
