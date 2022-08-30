<template>
  <input
    type="text"
    class="bg-indigo-700 text-gray-200 py-2 px-3 w-full"
    :placeholder="placeHolder"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    placeHolder: {
      type: String,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
