<template>
  <div class="list-memes">
    <div class="list-memes__tile">
      
    </div>
    <div class="list-memes__data">
      <div class="list-memes__data-cards">
        <div v-for="meme in memes" :key="meme.id">
          <Meme :meme="meme"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import Meme from "./Meme.vue";

export default {
  name: "ListMemes",
  components: {
    Meme
  },
  setup() {
    const store = useStore();
    const memes = computed(() => store.state.memes);
 
    onMounted(() => {
      store.dispatch("getData")
    })

    return {
      memes: memes
    }
  }
}
</script>

<style lang="scss">
.list-memes {
  &__data {
    &-cards {
      display: grid;
      grid-gap: 25px;
      gap: 25px;
      grid-template-columns: repeat(3, minmax(0, 1fr));

      @media(max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media(max-width: 500px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
    }
  }
}
</style>