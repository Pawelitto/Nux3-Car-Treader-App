<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  page: Object,
  info: Object,
  distance: Object,
  totalPages: Number,
  currPage: { type: Number, required: true },
});

const tabPag = ref([1, 2, 3]);

const emit = defineEmits(['nazwaEmita']);

function buttonClick(pageNumber) {
  if (pageNumber === 1) {
    tabPag.value[0] = 1;
    tabPag.value[1] = 2;
    tabPag.value[2] = 3;
  }
  if (pageNumber >= 3) {
    tabPag.value[0] = pageNumber - 1;
    tabPag.value[1] = pageNumber;
    tabPag.value[2] = pageNumber + 1;
  }
  if (pageNumber <= totalPages.value - 3) {
    tabPag.value[0] = pageNumber - 1;
    tabPag.value[1] = pageNumber;
    tabPag.value[2] = pageNumber + 1;
  }

  emit('nazwaEmita', pageNumber);
}
</script>
<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ distance.from }}</span>
          to
          <span class="font-medium">{{ distance.to }}</span>
          of
          <span class="font-medium">{{ page.rows }}</span>
          results
        </p>
      </div>
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination">
          <button
            class="larrow"
            @click="buttonClick(currPage - 1)"
            :disabled="currPage === 1">
            <Icon icon="system-uicons:chevron-left" />
          </button>

          <button
            v-if="currPage >= 3"
            class="pagination-link"
            :class="{ active: currPage === 1 }"
            @click="buttonClick(1)">
            {{ 1 }}
          </button>

          <button v-if="currPage >= 3" class="dot" disabled>...</button>

          <button
            class="pagination-link"
            :class="{ active: currPage === tabPag[0] }"
            @click="buttonClick(tabPag[0])">
            {{ tabPag[0] }}
          </button>

          <button
            class="pagination-link"
            :class="{ active: currPage === tabPag[1] }"
            @click="buttonClick(tabPag[1])">
            {{ tabPag[1] }}
          </button>

          <button
            class="pagination-link"
            :class="{ active: currPage === tabPag[2] }"
            v-if="currPage !== totalPages"
            @click="buttonClick(tabPag[2])">
            {{ tabPag[2] }}
          </button>
          <button v-if="currPage <= totalPages - 2" class="dot" disabled>
            ...
          </button>

          <button
            class="pagination-link"
            v-if="currPage <= totalPages - 2"
            :class="{ active: currPage === totalPages }"
            @click="buttonClick(totalPages)">
            {{ totalPages }}
          </button>

          <button
            class="rarrow"
            @click="buttonClick(currPage + 1)"
            :disabled="currPage === totalPages">
            <Icon icon="system-uicons:chevron-right" />
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>
