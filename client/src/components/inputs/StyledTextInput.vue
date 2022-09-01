<template>
  <input
    :type="inputType"
    class="bg-light_slate text-gray-200 py-2 px-3 w-full"
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
    inputType: {
      required: false,
      type: String,
      default: "text",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
