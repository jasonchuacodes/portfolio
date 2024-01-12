export default function useRedirectToHash(toLink) {
    const isVisible = ref(false)

  function onElementVisibility(state) {
    if (state) {
      isVisible.value = true;
      updateHashWithoutRedirect(toLink);
    }
  }

  // Updates the route hash without navigating
  function updateHashWithoutRedirect(toLink) {
    history.pushState({}, "", toLink);

    const hashChangeEvent = new CustomEvent('hash-change', {
      detail: { newHash: toLink }
    })
    window.dispatchEvent(hashChangeEvent);
  }

  return {
    onElementVisibility,
    isVisible
  };
}
