<template class="w-full">
  <div class="w-full">
    <NavBar></NavBar>
    <MainBody />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/navbar/NavBar.vue";
import MainBody from "./components/main-body/MainBody.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { NavBar, MainBody },
});
</script>

<style scoped></style>
