// Initialize medium zoom.
$(document).ready(function () {
  const zoomBackground =
    getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee"; // + 'ee' for transparency.

  const getNewsZoomContainer = () => ({
    left: Math.round(window.innerWidth * 0.15),
    right: Math.round(window.innerWidth * 0.15),
    top: Math.round(window.innerHeight * 0.15),
    bottom: Math.round(window.innerHeight * 0.15),
  });

  medium_zoom = mediumZoom("[data-zoomable]:not(.news-thumb)", {
    background: zoomBackground,
  });

  medium_zoom_news = mediumZoom(".news-thumb[data-zoomable]", {
    background: zoomBackground,
    margin: 16,
    container: getNewsZoomContainer(),
  });

  window.addEventListener("resize", () => {
    medium_zoom_news.update({ container: getNewsZoomContainer() });
  });
});
