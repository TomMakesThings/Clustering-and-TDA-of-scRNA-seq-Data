const f = document.getElementById('graphform');
const q = document.getElementById('query');

function submitted(event) {
  event.preventDefault();
  const url = "https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages"
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);
