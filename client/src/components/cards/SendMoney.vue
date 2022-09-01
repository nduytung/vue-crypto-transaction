<template>
  <form
    class="bg-dark_slate rounded-xl my-10 px-6 py-8 flex flex-col items-center gap-5"
  >
    <StyledTextInput placeHolder="Address to" />
    <StyledTextInput placeHolder="Amount (ETH)" type="number" />
    <StyledTextInput placeHolder="Keyword (GIF)" />
    <StyledTextInput placeHolder="Enter your message" />
    <hr class="w-full border border-gray-400" />
    <OutlineBtn>Send now </OutlineBtn>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StyledTextInput from "../inputs/StyledTextInput.vue";
import PrimaryBtn from "../buttons/PrimaryBtn.vue";
import OutlineBtn from "../buttons/OutlineBtn.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { StyledTextInput, PrimaryBtn, OutlineBtn },
});
</script>

<style scoped></style>
