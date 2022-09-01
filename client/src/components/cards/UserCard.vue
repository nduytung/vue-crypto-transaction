<template>
  <div
    class="p-3 rounded-xl w-2/3 mx-auto bg-gradient-to-r from-purple-400 via-yellow-200 to-rose-500"
  >
    <section class="flex justify-between">
      <img class="w-12 h-12" src="/img/ethereum-icon.png" />
      <div
        class="rounded-full border border-white text-white shrink-0 w-6 h-6 px-2"
      >
        i
      </div>
    </section>

    <section class="mt-20">
      <h4 class="text-white font-thin">Adress</h4>
      <p class="text-xl font-semibold text-white">Ethereum</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
