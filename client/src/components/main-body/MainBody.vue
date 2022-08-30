<template>
  <div class="grid grid-cols-2 bg-indigo-800">
    <div class="col-span-1">
      <h1 class="text-white text-6xl font-thin">
        Send Crypto across the world
      </h1>
      <h3 class="text-white font-thin text-lg my-4">
        Explore the crypto world. Buy and sell your own crypto easily on Krypto
      </h3>
      <PrimaryBtn classname="w-full">Connect wallet</PrimaryBtn>
      <table class="rounded-xl my-5 overflow-hidden border">
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
