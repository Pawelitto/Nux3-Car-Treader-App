export const useUtilities = () => {
  function toTitleCase(string) {
    return string.replace(/^./, string[0].toUpperCase());
  }
  return {
    toTitleCase,
  };
};
