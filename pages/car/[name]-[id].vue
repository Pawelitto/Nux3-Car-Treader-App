<script setup>
const route = useRoute();
const { cars } = useCars();

useHead({
  title: toTitleCase(route.params.name),
});

const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id);
  });
});

definePageMeta({
  layout: 'custom',
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with id of ${route.params.id} does not exist`,
  });
}

function toTitleCase(string) {
  return string.replace(/^./, string[0].toUpperCase());
}
</script>
<template>
  <div v-if="car">
    <!-- <CarDetailHero :car="car" /> -->
    <!-- <CarDetailAttributes :features="car.features" /> -->
    <!-- <CarDetailDescription :description="car.description" /> -->
    <CarDetailContact />
  </div>
</template>
