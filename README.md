<div align="center">
  <h1>Clustering and Topological Data Analysis of Single-Cell RNA Sequencing Data</h1>
  <p><img src="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/gh-pages/Assets/Readme_Assets/Logo.png" width="170"></p>
  <p><b>Project by <a href="https://github.com/TomMakesThings">TomMakesThings</a> - 2020/2021</b></p>
</div>

<details open="open">
  <summary><b>Contents</b></summary>
  <ol>
    <li><a href="#about">About</a></li>
    <li><a href="#results">Results</a></li>
    <ul>
      <li><a href="#clustering">Clustering</a></li>
      <li><a href="#tda">Topological Data Analysis</a></li>
    </ul>
    <li><a href="#code">Running the Code</a></li>
    <li><a href="#repositorycontents">Repository Contents</a></li>
    <ul>
      <li><a href="#mainbranch">Main Branch</a></li>
      <ul>
        <li><a href="#jupyternotebooks">Jupyter Notebooks</a></li>
        <li><a href="#data">Data</a></li>
      </ul>
      <li><a href="#pagesbranch">GitHub Pages Branch</a></li>
      <ul>
        <li><a href="#graphs">Graphs</a></li>
        <li><a href="#website">Website</a></li>
      </ul>
    </ul>
  </ol>
</details>

<p><img src="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/gh-pages/Assets/Readme_Assets/Divider.png" width="100%"></p>

<a id="about"></a>
<h2 align="center">🧬 About 🧬</h2>
<p>This respository hosts the datasets, code, interactive graphs and website for my <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/raw/gh-pages/Paper/Clustering-and-TDA-of-scRNA-seq-Data.pdf">undergraduate final year project</a>. The aim is to experiment with clustering and topological data analysis to detect hidden gene expression in three different types of datasets. For an overview of the work, refer to this respository's <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">GitHub Pages site</a>, or if you'd like to experiment with the code yourself, refer to the <a href="#code">Running the Code</a>.</p>

<p><img src="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/gh-pages/Assets/Readme_Assets/Divider.png" width="100%"></p>

<a id="results"></a>
<h2 align="center">🧬 Results 🧬</h2>

<a id="clustering"></a>
<details open="open">
  <summary><b>Clustering</b></summary>
  <p>Different combinations of the pre-processing, dimensionality reduction methods and clustering algorithm were tested with the best combination varying per dataset.</p>
  <p><b>Benchmark</b></p>
  <ul>
    <li>Dataset originally named sc_10x by <a href="https://github.com/LuyiTian/sc_mixology">Tian et al.</a></li>
    <li>Contains human lung adenocarcinoma cancer cells with three cell lines</li>
    <li>Best accuracy was 99.9% in which 901 out of 902 cells were assigned to the correct cell line</li>
    <li>Use standardization and PCA or ICA with three components with agglomerative hierarchical clustering or BIRCH</li>
  </ul>
  <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">
    <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Benchmark-Cluster.gif" width="600">
  </a>
  <p><b>Splat Simulated</b></p>
  <ul>
    <li>Dataset of artificial data simulated with Splat during this project</li>
    <li>Gene expression imitates sc_10x</li>
    <li>Ground truth contains four target groups</li>
    <li>Was able to achieve 100% accuracy in which 2000 cells were correctly grouped</li>
    <li>Use standardization and PCA or ICA with four components along with agglomerative hierarchical clustering, BIRCH or mini batch k-means</li>
  </ul>
  <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">
    <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Simulated-Cluster.gif" width="600">
  </a>
  <p><b>Mouse Cortex</b></p>
  <ul>
    <li>Dataset originally named mouse cortex mRNA by <a href="http://linnarssonlab.org/cortex/">Zeisel et al.</a></li>
    <li>Contains brain cells from mouse cortex and hippocampus with nine groups and 47 subgroups determined previously using BackSPIN biclustering</li>
    <li>Unfortunately I was only able to get 44% accuracy</li>
    <li>Standard clustering methods are not as reliable with this data as cells show an overlapping spectrum of gene expression</li>
  </ul>
  <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">
    <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Mouse-Cluster.gif" width="600">
  </a>
</details>

<a id="tda"></a>
<details open="open">
  <summary><b>Topological Data Analysis with Kepler Mapper</b></summary>
  <p>Simplicial complexes for each dataset were created with the same hyperparameters so that topological features can be compared.</p>
  <p><b>Benchmark</b></p>
  <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">
    <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Benchmark-Mapper.gif" width="100%">
  </a>
  <p><b>Splat Simulated</b></p>
  <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">
    <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Simulated-Mapper.gif" width="100%">
  </a>
  <p><b>Mouse Cortex</b></p>
  <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">
    <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Mouse-Mapper.gif" width="100%">
  </a>
</details>

<p><img src="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/gh-pages/Assets/Readme_Assets/Divider.png" width="100%"></p>

<a id="code"></a>
<h2 align="center">🧬 Running the Code 🧬</h2>
<p>The code was written in Python and R across two Jupyter notebooks. For an explaination of each notebook, see the section below. These were developed in Google Colab which is a free Jupyter notebook environment that allows you to run code through a browser.</p>
  
<details>
  <summary><b>Click to show instructions</b></summary>
  
  <table>
    <thead>
    </thead>
    <tbody>
        <tr>
          <td align="center" valign="top">1.</td>
          <td align="left" valign="top">
            <p>Download the repository by clicking Code ➞ Download ZIP.</p>
            <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/archive/refs/heads/main.zip"><img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Download-Instruction.png" width="100%"></a>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">2.</td>
          <td align="left" valign="top">
            <p>Extract the contents of the zip.</p>
            <p><img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/ZIP-Extract.png" width="600"></p>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">3.</td>
          <td align="left" valign="top">
            <p>Visit <a href=https://colab.research.google.com>https://colab.research.google.com</a>.</p>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">4.</td>
          <td align="left" valign="top">
            <p>Sign in to your Google account.</p>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">5.</td>
          <td align="left" valign="top">
            <p>On Colab, go to File ➞ Upload notebook.</p>
            <a href="https://colab.research.google.com/notebooks/intro.ipynb#recent=true">
    <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Colab-Upload.gif" width="100%"></a>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">6.</td>
          <td align="left" valign="top">
            <p>Navigate to Clustering-and-TDA-of-scRNA-seq-Data-main > Jupyter_Notebooks.</p>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">7.</td>
          <td align="left" valign="top">
            <p>Select the notebook to upload.</p>
            <p><img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Notebook-File-Location.png" width="100%"></p>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">8.</td>
          <td align="left" valign="top">
            <p>Optionally switch from CPU to GPU by selecting Change runtime type ➞ Hardware accelerator ➞ GPU ➞ Save. This is recommended if you selected Clustering_and_TDA.ipynb and wish to train a new autoencoder as it can considerably reduce training time.</p>
            <a><img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Notebook-GPU.gif" width="100%"></a>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">9.</td>
          <td align="left" valign="top">
            <p>Run the code through pressing Runtime ➞ Run all.</p>
            <a><img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Notebook-Run.gif" width="100%"></a>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">10.</td>
          <td align="left" valign="top">
            <p>If you would like to make any changes, for example running with your own dataset, follow the instructions in the notebook.</p>
          </td>
        </tr>
    </tbody>
</table>
</details>

<p><img src="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/gh-pages/Assets/Readme_Assets/Divider.png" width="100%"></p>
  
<a id="repositorycontents"></a>
<h2 align="center">🧬 Repository Contents 🧬</h2>
<p>The repository consists of two branches: <a href="#mainbranch">main</a></li> and <a href="#pagesbranch">gh-pages</a>. The contents of each branch is explained here.</p>
<a id="mainbranch"></a>
<h3>Main Branch</h3>

<a id="jupyternotebooks"></a>
<details open="open">
<summary><b>Jupyter Notebooks</b></summary>
  
<h5>Splat_Simulator</h5>
<p>The purpose of notebook <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Splat_Simulator.ipynb">Splat_Simulator.ipynb</a> is to produce new, artificial scRNA-seq data. For this project, it was used to create the simulated dataset, though can easily be altered to make new data for other purposes. To see a fully executed version of the code, <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/Notebooks/Splat_Simulator.html">click here</a>.</p>

<ul>
  <li>Gene counts and group labels are generated using the Splat simulator, which is part of the R package Splatter, and so the code contains a mix between Python and inline R.</li>
  <li>To mimick true biological gene expression, the benchmark dataset has been set to use as a seed, though this could be swapped out to imitate another dataset.</li>
  <li>After seeding the simulator, datapoints are generated with each belonging to one of four groups.</li>
  <li>The new data and labels are then saved as CSV files using Python. These can be downloaded and reopened to use in <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Clustering_and_TDA.ipynb">Clustering_and_TDA.ipynb</a>.</li>
  
<a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Splat_Simulator.ipynb">
  <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Splat-Simulator-Demo.gif" width="100%">
</a>

<h5>Clustering_and_TDA</h5>
<p>In the notebook <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Clustering_and_TDA.ipynb">Clustering_and_TDA.ipynb</a>, experimentation is performed on the three given datasets.
  To see a fully executed version of the code with interactive graphs, <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/Notebooks/Clustering_and_TDA.html">click here</a>.</p>

<ul>
  <li>First the datasets and their target labels are opened as dataframes. The given datasets are downloaded from URL so that the notebook can be run with no set up required,
  although the code has been designed so that it can also be run with your own dataset.</li>
  <li>Next, a dataset is selected and an autoencoder with customisable hyperparameters created using PyTorch Lightning to use as a feature extractor for the gene counts</li>
  <li>Then clustering is performed to divide cells into groups which show similar gene expression. Several clustering algorithms can be chosen including: k-means, agglomerative 
    hierarchical, BIRCH, mini-batch k-means, spectral and Gaussian mixture. The encoding produced by the autoencoder can optionally be used, along with other dimensionality    
    reduction methods such as PCA, ICA or NMF and techniques such as standardization and t-SNE.</li>
  </li>
  <li>At the end of the notebook, Kepler Mapper is run on the gene counts to produce a simplicial complex to reveal the topological shape of the high-dimensional data.</li>
  
<a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Clustering_and_TDA.ipynb">
  <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Clustering-Demo.gif" width="100%">
</a>
  
</details>

<a id="data"></a>
<details open="open">
<summary><b>Data</b></summary>
  
<h5>Datasets</h5>
<p><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/main/Data/Datasets">This folder</a> contains CSV, text and R object files containing the gene count data, labels and metadata for three scRNA-seq datasets. These are downloaded and opened automatically in notebook <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Clustering_and_TDA.ipynb">Clustering_and_TDA.ipynb.</a></p>
<a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Clustering_and_TDA.ipynb">
  <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Notebook-Datasets.gif" width="100%">
</a>
<p>To find out more about the datasets see the <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">GitHub Pages site</a>.</p>
<a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">
  <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Dataset-Demo.gif" width="100%">
</a>

<h5>Benchmark_Autoencoder, Simulated_Autoencoder and Evaluation_Autoencoder</h5>
These folders contain zip files that are opened automatically in notebook <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Clustering_and_TDA.ipynb">Clustering_and_TDA.ipynb.</a> and do not need to be manually downloaded. These files allow the state of trained autoencoders to be reloaded for the three datasets to avoid training new models every time the notebook is run. Within each zip is a model checkpoint file containing the model weights, as well as text files listing the cells / samples selected for the testing, training and validation data to ensure training and testing data does not overlap when the notebook is run again.
  
</details>

<a id="pagesbranch"></a>
<h3>GitHub Pages Branch</h3>

<a id="graphs"></a>
<details open="open">
<summary><b>Graphs</b></summary>
<p>In <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs">this folder</a>, interactive HTML graphs from experiments with clustering and topological data analysis are located.</p>
<ul>
  <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Target_Groups">Target_Groups</a> - graphs of expected cells lines / groups</li>
  <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/K-Means">K-Means</a> - experiments with k-means clustering</li>
  <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Hierarchical_Clustering">Hierarchical_Clustering</a> - experiments with agglomerative hierarchical clustering</li>
  <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Alternative_Algorithms">Alternative_Algorithms</a> - experiments with other clustering algorithms</li>
  <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Topological_Data_Analysis">Topological_Data_Analysis</a> - simplicial complexes produced through Kepler Mapper</li>
</ul>
  <p>To view a particular graph, refer to the Graph Finder on the <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">GitHub Pages site</a>.</p>
  <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">
  <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Graph-Finder-Demo.gif" width="100%"></a>
</details>

<a id="website"></a>
<details open="open">
<summary><b>Website</b></summary>
Other folders provide the HTML, CSS, JavaScript and assets required to host the GitHub pages site.
</details
  
<p><img align="right" src="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/gh-pages/Assets/Readme_Assets/Hexagons.png" width="120"></p>
