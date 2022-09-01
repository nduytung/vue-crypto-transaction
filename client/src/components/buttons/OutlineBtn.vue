<template>
  <button
    class="border border-white rounded-full text-white text-lg px-6 py-3 bg-transparent"
  >
    <slot><!-- optional fallback --></slot>
  </button>
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
