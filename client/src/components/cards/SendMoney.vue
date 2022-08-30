<template>
  <form class="bg-indigo-500 rounded-lg p-6 flex flex-col items-center gap-5">
    <StyledTextInput placeHolder="Address to" />
    <StyledTextInput placeHolder="Amount (ETH)" />
    <StyledTextInput placeHolder="Keyword (GIF)" />
    <StyledTextInput placeHolder="Enter your message" />
    <hr class="w-full" />
    <PrimaryBtn>Send now</PrimaryBtn>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StyledTextInput from "../inputs/StyledTextInput.vue";
import PrimaryBtn from "../buttons/PrimaryBtn.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { StyledTextInput, PrimaryBtn },
});
</script>

<style scoped></style>
