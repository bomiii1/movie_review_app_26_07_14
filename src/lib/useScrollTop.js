export const useScrollTop = () => {
  window.scrollTop({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return;
};
