const graphform = document.getElementById('graphform');
const query = document.getElementById('query');

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
  var graph = document.getElementById("graph-html")
  graph.data = option.dataset.href;
  graph.style.display = "block";
  if (option.className.includes("cluster-link")) {
    document.getElementById("graph-wrapper").style.padding = "0px";
    // if (window.innerWidth > 840) {
    //   Object.assign(graph.style, {"width": "800px", "height": "500%", "-webkit-transform": "scale(1)", "transform": "scale(1)"});
    // }
    // else if (window.innerWidth < 840) {
    //   Object.assign(graph.style, {"width": "800px", "height": "500%", "-webkit-transform": "scale(0.8)", "transform": "scale(0.8)"});
    // }
  }
  else {
    document.getElementById("graph-wrapper").style.padding = "20px";
  }
}

graphform.addEventListener('submit', submitted);
graphform.addEventListener("mouseover", showDropdown);
graphform.addEventListener("mouseout", hideDropdown);
