export default function useRedirectToHash(toLink) {
  function onElementVisibility(state) {
    if (state) {
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
  };
}
