const graphform = document.getElementById('graphform');
const query = document.getElementById('query');

function submitted(event) {
  event.preventDefault();
  const url = "https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages"
  const win = window.open(url, '_blank');
  win.focus();
}

graphform.addEventListener('submit', submitted);

graphform.addEventListener("mouseover", showDropdown);
graphform.addEventListener("mouseout", hideDropdown);

function showDropdown(event){
  document.getElementById("dropdown-content").style.display = "block";
}

function hideDropdown(event) {
  document.getElementById("dropdown-content").style.display = "none";
}

function filterFunction() {
  // var input, filter, ul, li, a, i;
  // input = document.getElementById("query");
  // filter = input.value.toUpperCase();
  // div = document.getElementById("graphform");
  // a = div.getElementsByTagName("a");
  // for (i = 0; i < a.length; i++) {
  //   txtValue = a[i].textContent || a[i].innerText;
  //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //     a[i].style.display = "";
  //   } else {
  //     a[i].style.display = "none";
  //   }
  // }
}
