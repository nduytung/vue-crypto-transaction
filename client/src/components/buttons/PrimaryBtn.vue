<template>
  <button
    class="text-white bg-primary_blue rounded-full px-4 py-2 font-medium text-lg"
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
