<template>
  <div class="catalog">
      <div class="catalog-search-wrapper">
        <input type="text" placeholder="search" class="catalog-search" >
        <!-- <input type="submit" value="rt" class="search-btn"> -->
      </div>
    
    <h1>Каталог</h1> 
    <div class="catalog-container">
        <CatalogList/>
        <!-- <div class="filter-container">
            <Filter/>
        </div> -->
    </div>
      
  </div>
</template>

<script>
// import Filter from "../components/Filter"
import CatalogList from "../components/Catalog/CatalogList"
export default {
    name: 'Catalog',
    props:{},
    components:{
        CatalogList
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>
    .catalog-search{
        width: 100%;
        height: 50px;
        color: black;
        font-weight: 300;
        font-size: 20px;
        line-height: 22px;
        padding: 10px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border: 2px transparent; 
        outline:none;  
        vertical-align: middle;    
    }
    .catalog-container{
        display: flex;
        justify-content: space-between;
        margin: 0px;
    }
    .catalog-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        margin: 0px;
        padding: 30px;   
    }
    .catalog-search-wrapper{
        display: flex;
    }
    .filter-container{
        display: flex;
        align-self: flex-start;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        padding: 25px;
        margin-left: 30px;
    }
    /* .search-btn{
        background: #FFFFFF;
        background-image: url("../assets/img/icons/search.svg") no-repeat ;
        background-repeat: no-repeat;
        border: none;
        outline: none;
        
    } */
</style>