<script setup>
import { Icon } from '@iconify/vue';
<<<<<<< HEAD
const props = defineProps({
  page: Object,
  info: Object,
  distance: Object,
  currPage: { type: Number, required: true },
});
const emit = defineEmits(['nazwaEmita']);

function buttonClick(pageNumber) {
  emit('nazwaEmita', pageNumber);
}

// watch(
//   () => props.currPage.value,
//   () => {
//     console.log('Dziecko aktywna: ' + props.currPage.value);
//   }
// );
=======

const props = defineProps({ page: Object, info: Object });
>>>>>>> 94022913b46ad916255fe34e4266142386553d55
</script>
<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
<<<<<<< HEAD
          <span class="font-medium">{{ distance.from }}</span>
          to
          <span class="font-medium">{{ distance.to }}</span>
          of
          <span class="font-medium">{{ page.rows }}</span>
=======
          {{ ' ' }}
          <span class="font-medium">1</span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span class="font-medium">{{ info.i }}</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span class="font-medium">{{ page.rows }}</span>
          {{ ' ' }}
>>>>>>> 94022913b46ad916255fe34e4266142386553d55
          results
        </p>
      </div>
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination">
<<<<<<< HEAD
          <button class="larrow" @click="buttonClick(currPage - 1)">
            <Icon icon="system-uicons:chevron-left" />
          </button>
          <template v-for="index in 3" :key="index">
            <button
              class="pagination-link"
              :class="{ active: currPage === index }"
              @click="buttonClick(index)">
              {{ index }}
            </button>
          </template>

          <button class="rarrow" @click="buttonClick(currPage + 1)">
            <Icon icon="system-uicons:chevron-right" />
          </button>
=======
          <a
            href="#"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <Icon icon="system-uicons:chevron-left" />
          </a>
          <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
          <a
            href="#"
            aria-current="page"
            class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >1</a
          >
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >2</a
          >
          <a
            href="#"
            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >3</a
          >
          <span
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
            >...</span
          >
          <a
            href="#"
            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >8</a
          >
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >9</a
          >
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >10</a
          >
          <a
            href="#"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <Icon icon="system-uicons:chevron-right" />
          </a>
>>>>>>> 94022913b46ad916255fe34e4266142386553d55
        </nav>
      </div>
    </div>
  </div>
</template>
