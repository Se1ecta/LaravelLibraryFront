<template>
  <div class="library">
      <h1>Библиотека</h1>
      <TopCategory/>
      <div class="container">
        <Category/>
        <CatalogContent/>
      </div>
  </div>
</template>

<script>
import TopCategory from "../components/Category/TopCategory"
import Category from "../components/Category/Category"
import CatalogContent from "../components/Catalog/CatalogContent"

export default {
    components:{
        TopCategory,
        Category,
        CatalogContent,
    },
    data(){
        return{
            category:[{
                title:"Fantasy",
                image:""
            }]
        }
    }
     
}
</script>

<style scopped>
    h1{
        font-size: 36px;
        margin: 0px 10px;
    }
    .container{
        display: flex;
        margin: 25px 0px 0px 0px;

    }
</style>