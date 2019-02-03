function coinActive() {
  container.appendChild(overlayEl)
}

function coinComplete() {
  container.removeChild(overlayEl)
}
var headContainer = document.getElementsByTagName("head");
headContainer = headContainer[0];
var newstyles = document.createElement("style");
newstyles.type = "text/css";
var css = ".coin-overlay {     position: fixed;     top: 0;     right: 0;     bottom: 0;     left: 0;     background: rgba(255,255,255,0.8);     z-index: 999; } .coin-loading {     position: absolute;     top: 50%;     left: 50%;     transform: translate3d(-50%, -50%, 0);     text-align: center; } .coin-loading h5 {     font-family: 'omnes-pro', 'Omnes', Arial, Helvetiva, sans-serif;     font-size: 18px;     font-weight: 600;     color: #29485B;     margin: 0;     padding: 0; } .coin-loading img {     width: 50%; }",
  container;
$(document).ready(function() {
  newstyles.appendChild(document.createTextNode(css)), headContainer.appendChild(newstyles), container = document.getElementsByTagName("body"), container = container[0]
});
var loadingGif = "/templates/default/assets/img/coin-spin.gif",
  img = document.createElement("img");
img.src = loadingGif;
var textEl = document.createElement("h5");
textEl.appendChild(document.createTextNode("Loading"));
var loadingContainer = document.createElement("div");
loadingContainer.className = "coin-loading fade-in", loadingContainer.appendChild(img), loadingContainer.appendChild(textEl);
var overlayEl = document.createElement("div");
overlayEl.className = "coin-overlay", overlayEl.appendChild(loadingContainer);
