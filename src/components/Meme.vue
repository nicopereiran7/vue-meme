<template>
  <div class="meme">
    <div class="img">
      <img :src="meme.url" :alt="meme.name">
    </div>
    <div class="info">
      <i class="share square outline icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meme: Object
  }
}
</script>

<style lang="scss" scoped>
.meme {
  .img {
    overflow: hidden;
    img {
      inset: 0px;
      display: block;
      height: 100%;
      object-fit: cover;
      width: 100%;
      opacity: 1;
      transition: 0.5s ease all;

      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
}

</style>