<template>
  <section class="py-5 bg-indigo-900 w-full">
    <section class="container mx-auto flex justify-between items-center">
      <div>
        <img class="w-12 h-12" src="../../../public/img/main-logo.png" />
      </div>
      <ul class="flex gap-8">
        <li class="text-white font-medium text-xl">Market</li>
        <li class="text-white font-medium text-xl">Exchange</li>
        <li class="text-white font-medium text-xl">Wallets</li>
        <li class="text-white font-medium text-xl">Tutorials</li>
      </ul>
      <PrimaryBtn classname="">Login</PrimaryBtn>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrimaryBtn from "../buttons/PrimaryBtn.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { PrimaryBtn },
});
</script>

<style scoped></style>
