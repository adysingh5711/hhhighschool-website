export function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
  if (window.location.pathname === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.pushState("", document.title, window.location.pathname);
    }
  }
}
