<script setup>
import { Icon } from '@iconify/vue';
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
        </nav>
      </div>
    </div>
  </div>
</template>
