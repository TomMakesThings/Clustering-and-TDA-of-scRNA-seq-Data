const graphform = document.getElementById('graphform');
const query = document.getElementById('query');

function submitted(event) {
  event.preventDefault();
  const url = "https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages"
  const win = window.open(url, '_blank');
  win.focus();
}

graphform.addEventListener('submit', submitted);
