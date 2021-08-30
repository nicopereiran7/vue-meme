<template>
  <div class="container">
    <NavBar/>
    <div class="content">
      <ListMemes />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ListMemes from "./components/ListMemes.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    ListMemes
  },
  created() {
    document.title = "vue-meme | Los mejores memes del mundo"
  },
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
}

.container {
  min-height: 100vh;
  background: rgb(0,0,0);
  background: linear-gradient(177deg, rgba(0,0,0,1) 0%, rgba(4,22,18,1) 69%, rgba(4,20,17,1) 100%);
  background-repeat: no-repeat;

  .content {
   padding: 0 100px;

   @media(max-width: 768px) {
    padding: 0 20px;
  }
  }
}


</style>
