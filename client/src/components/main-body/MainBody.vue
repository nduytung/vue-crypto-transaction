<template>
  <div class="bg-gradient-to-r from-black to-[#7d2b48] via-[#303052]">
    <div class="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-20 py-10">
      <div
        class="col-span-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        <h1 class="text-white text-6xl font-medium">
          Send Crypto <br />
          across the world
        </h1>
        <h3 class="text-white font-thin text-lg my-4 w-2/3">
          Explore the crypto world. Buy and sell your own crypto easily on
          Krypto
        </h3>
        <PrimaryBtn classname="w-4/5 py-4 my-8">Connect wallet</PrimaryBtn>
        <table class="rounded-xl my-5 overflow-hidden border text-center">
          <tr class="">
            <td class="border border-white py-3 px-6 font-medium text-white">
              Reliability
            </td>
            <td class="border border-white py-3 px-6 font-medium text-white">
              Security
            </td>
            <td class="border border-white py-3 px-6 font-medium text-white">
              Ethereum
            </td>
          </tr>
          <tr>
            <td class="border border-white py-3 px-6 font-medium text-white">
              Web 3.0
            </td>
            <td class="border border-white py-3 px-6 font-medium text-white">
              Low fees
            </td>
            <td class="border border-white py-3 px-6 font-medium text-white">
              Blockchain
            </td>
          </tr>
        </table>
      </div>
      <div class="col-span-1">
        <UserCard />
        <SendMoney />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrimaryBtn from "../buttons/PrimaryBtn.vue";
import UserCard from "../cards/UserCard.vue";
import SendMoney from "../cards/SendMoney.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { PrimaryBtn, UserCard, SendMoney },
});
</script>

<style scoped></style>
