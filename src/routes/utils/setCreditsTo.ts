export const setCreditsTo = (
  author: string,
  url: string,
): void => {
  window.localStorage.setItem("author", author);
  window.localStorage.setItem("url", url);
}
