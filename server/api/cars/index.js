export default defineEventHandler(async (event) => {
  let cars = await $fetch('/cars', {
    baseURL: useRuntimeConfig().apiBaseUrl,
  });
  return cars;
});
