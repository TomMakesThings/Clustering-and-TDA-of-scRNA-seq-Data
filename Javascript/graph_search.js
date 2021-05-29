const graphform = document.getElementById('graphform');
const query = document.getElementById('query');
const graph = document.getElementById("graph-html");
const graph_wrapper = document.getElementById("graph-wrapper");

function submitted(event) {
  event.preventDefault();
  const url = "https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages"
  const win = window.open(url, '_blank');
  win.focus();
  hideDropdown()
}

function showDropdown(event){
  document.getElementById("dropdown-content").style.display = "block";
}

function hideDropdown(event) {
  document.getElementById("dropdown-content").style.display = "none";
}

function searchFilter() {
  input = query.value.toUpperCase();
  form = document.getElementById("graphform");
  let options = ["cluster-link", "tda-link"];
  let categories = ["cluster-category", "tda-category"];
  for (i = 0; i < options.length; i++) {
    option = form.getElementsByClassName(options[i]);
    category = document.getElementById(categories[i]);
    category_empty = true
    for (j = 0; j < option.length; j++) {
      text_value = option[j].textContent || option[j].innerText;
      text_tags = option[j].dataset.tags;
      /* Check if the input text matches the option's name or metadata tags */
      if (text_value.toUpperCase().indexOf(input) > -1 || text_tags.toUpperCase().indexOf(input) > -1) {
        option[j].style.display = "";
        category_empty = false;
      }
      /* Otherwise hide the option */
      else {
        option[j].style.display = "none";
      }
    }
    /* Hide category headers if no options left*/
    if (category_empty) {
      category.style.display = "none";
    }
    else {
      category.style.display = "";
    }
  }
}

function displayGraph(option) {
  /** Change the graph to display **/
  graph.data = option.dataset.href;
  /** Show if not already visible **/
  graph_wrapper.style.display = "";
  if (option.className.includes("cluster-link")) {
    graph_wrapper.style.padding = "0px";
    graph_wrapper.classList.add("cluster-graph");
    graphScale()
  }
  else {
    graph_wrapper.style.padding = "20px";
    graph_wrapper.classList.remove("cluster-graph");
    graph.setAttribute("style", "width: 100% !important; height: 100% !important; -webkit-transform: scale(1); transform: scale(1); -webkit-transition: -webkit-transform 0.8s; transition: transform 0.8s; -webkit-transform-origin: 0 0; transform-origin: 0 0;");
  }
}

function graphScale() {
  if (graph_wrapper.className.includes("cluster-graph")) {
    if (window.innerWidth > 840) {
      graph.setAttribute("style", "width: 100% !important; height: 100% !important; -webkit-transform: scale(1); transform: scale(1); -webkit-transition: -webkit-transform 0.8s; transition: transform 0.8s; -webkit-transform-origin: 0 0; transform-origin: 0 0;");
    }
    else if (window.innerWidth > 660) {
      graph.setAttribute("style", "width: 800px !important; height: 500% !important; -webkit-transform: scale(0.8); transform: scale(0.8); -webkit-transition: -webkit-transform 0.8s; transition: transform 0.8s; -webkit-transform-origin: 0 0; transform-origin: 0 0;");
    }
    else {
      graph.setAttribute("style", "width: 800px !important; height: 500% !important; -webkit-transform: scale(0.6); transform: scale(0.6); -webkit-transition: -webkit-transform 0.8s; transition: transform 0.8s; -webkit-transform-origin: 0 0; transform-origin: 0 0;");
    }
  }
}

graphform.addEventListener('submit', submitted);
graphform.addEventListener("mouseover", showDropdown);
graphform.addEventListener("mouseout", hideDropdown);
window.addEventListener('resize', graphScale);

/** Hide graph on page load **/
graph_wrapper.style.display = "none";
