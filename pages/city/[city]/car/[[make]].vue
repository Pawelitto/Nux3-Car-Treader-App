<script setup>
const route = useRoute();
useHead({
  title: route.params.name,
});

function toTitleCase(string) {
  return string.replace(/^./, string[0].toUpperCase());
}
</script>
<template>
  <div>
    <CarCards />
    <!--    <CarLikedcars />-->
  </div>
</template>
