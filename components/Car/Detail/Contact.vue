<script scoped>
const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
</script>
<template>
  <div class="mt-10 relative">
    <div class="flex w-[600px] justify-between">
      <input type="text" v-model="name" class="border p-1" placeholder="Name" />
      <input
        type="text"
        v-model="email"
        class="border p-1"
        placeholder="Email" />
      <input
        type="text"
        v-model="phone"
        class="border p-1"
        placeholder="Phone" />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea
        class="border p-1 w-full"
        v-model="message"
        placeholder="Message"></textarea>
    </div>
    <button class="ml-[470px] bg-blue-400 text-white px-10 py-3 rounded mt-4">
      Submit
    </button>
  </div>
</template>
