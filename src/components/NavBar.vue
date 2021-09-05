<template>
  <div class="nav">
    <div class="nav__logo">
      <a href="#">VUE<span>MEMES</span></a>      
    </div>
    <div class="nav__item">
      <a href="#">Memes</a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;

  @media(max-width: 768px) {
    padding: 20px;
  }

  &__logo {
    a {
      text-decoration: none;
      color: #fff;

      span {
        color: #18af68;
      }
    }
  }

  &__item {
    a {
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>