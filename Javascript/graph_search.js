const graphform = document.getElementById('graphform');
const query = document.getElementById('query');
const graph = document.getElementById("graph-html");
const graph_wrapper = document.getElementById("graph-wrapper");

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
      input_words = input.split(" ");
      found_all = true;
      for (k = 0; k < input_words.length; k++) {
        // Check if words in the input text match the words in the option's name or metadata tags
        if (!(text_value.toUpperCase().indexOf(input_words[k]) > -1 || text_tags.toUpperCase().indexOf(input_words[k]) > -1)) {
          found_all = false;
        }
      }
      // If all words match, display the option
      if (found_all == true) {
        category_empty = false;
        option[j].style.display = "";
      }
      // Otherwise hide the option
      else {
        option[j].style.display = "none";
      }
    }
    // Hide category headers if no options left
    if (category_empty) {
      category.style.display = "none";
    }
    else {
      category.style.display = "";
    }
  }
}

function displayGraph(option) {
  // Change the graph to display
  graph.src = option.dataset.href;
  // Show if not already visible
  graph_wrapper.style.display = "";
  graph_title = document.getElementById("graph-selected")
  graph_title.innerHTML = option.innerHTML;
  if (option.className.includes("cluster-link")) {
    // Add class attribute
    graph_wrapper.classList.add("cluster-graph");
    // Resize the div
    graph_wrapper.setAttribute("style", "padding: 0px; height: 580px;");
    graphScale()
  }
  else {
    graph_wrapper.classList.remove("cluster-graph");
    graph_wrapper.setAttribute("style", "padding: 20px 0px 20px 0px; height: 750px;");
    graph.setAttribute("style", "width: 100% !important; height: 100% !important; -webkit-transform: scale(1); transform: scale(1); -webkit-transition: -webkit-transform 0.8s; transition: transform 0.8s; -webkit-transform-origin: 0 0; transform-origin: 0 0;");
  }
}

/* Resize graphs to fit screen */
function graphScale() {
  var group_graphs = document.getElementsByClassName("dataset-graph-html");
  var style = "width: 800px !important; height: 500% !important; -webkit-transform: scale(0.6); transform: scale(0.6); -webkit-transition: -webkit-transform 0.8s; transition: transform 0.8s; -webkit-transform-origin: 0 0; transform-origin: 0 0;";
  if (window.innerWidth > 840) {
    style = "width: 100% !important; height: 100% !important; -webkit-transform: scale(1); transform: scale(1); -webkit-transition: -webkit-transform 0.8s; transition: transform 0.8s; -webkit-transform-origin: 0 0; transform-origin: 0 0;";
  }
  else if (window.innerWidth > 660) {
    style = "width: 800px !important; height: 500% !important; -webkit-transform: scale(0.8); transform: scale(0.8); -webkit-transition: -webkit-transform 0.8s; transition: transform 0.8s; -webkit-transform-origin: 0 0; transform-origin: 0 0;";
  }
  // Update the cell line / group graphs
  for (var i = 0; i < group_graphs.length; i++) {
      group_graphs[i].setAttribute("style", style);
  }
  // Update the graph finder graph
  if (graph_wrapper.className.includes("cluster-graph")) {
    graph.setAttribute("style", style);
  }
}

graphform.addEventListener("mouseover", showDropdown);
graphform.addEventListener("mouseout", hideDropdown);
window.addEventListener('resize', graphScale);

graphScale()

// Hide graph on page load
graph_wrapper.style.display = "none";
