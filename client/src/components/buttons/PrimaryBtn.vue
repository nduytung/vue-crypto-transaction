<template>
  <button
    class="text-white bg-indigo-600 rounded-full px-4 py-2 font-medium"
    :class="[props.classname]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    classname: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style scoped></style>
