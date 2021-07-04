<h1 align="center">Clustering and Topological Data Analysis of scRNA-seq Data</h1>

<details open="open">
  <summary><b>Contents</b></summary>
  <ol>
    <li><a href="#about">About</a></li>
    <li><a href="#code">Running the Code</a></li>
    <li><a href="#repositorycontents">Repository Contents</a></li>
    <ul>
      <li><a href="#mainbranch">Main Branch</a></li>
      <li><a href="#pagesbranch">GitHub Pages Branch</a></li>
    </ul>
  </ol>
</details>

<a id="about">
<h2 align="center">🧬 About 🧬</h2>
<p>This respository hosts the datasets, code, interactive graphs and website for my undergraduate final year project. The aim is to experiment with clustering and topological data analysis to detect hidden gene expression in three different types of datasets. For an overview of the work, refer to this respository's <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">GitHub Pages site</a>.</p>

<a id="code">
<h2 align="center">🧬 Running the Code 🧬</h2>
All code was written across two Jupyter notebooks. For an explaination of each notebook, see the <a href="code">Jupyter Notebooks</a> section below. These were designed to run in Google Colab which is a free Jupyter notebook environment that allows you to run code through a browser.
<ol>
  <li>Download the repository by clicking Code ➞ Download ZIP</li>
  <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/archive/refs/heads/main.zip">
    <img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/Download-Instruction.png" width="100%"></a>
  <li>Extract the contents of the zip</li>
  <p><img src="https://raw.githubusercontent.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/gh-pages/Assets/Readme_Assets/ZIP-Extract.png" width="600"></p>
  <li>Visit <a href=https://colab.research.google.com>https://colab.research.google.com</a></li>
  <li>Sign in to your Google account</li>
  <li>Download the Jupyter notebook(s) from this repository</li>
  <ul>
    <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Clustering_and_TDA.ipynb">Clustering_and_TDA.ipynb</a></li>
    <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Splat_Simulator.ipynb">Splat_Simulator.ipynb</a></li>
  </ul>
  <li>On Colab, go to File > Upload notebook</li>
</ol>
  
<a id="repositorycontents"></a>
<h2 align="center">🧬 Repository Contents 🧬</h2>
<p>The repository consists of two branches: <a href="#mainbranch">main</a></li> and <a href="#pagesbranch">gh-pages</a>. The contents of each branch is explained here.</p>
<a id="mainbranch">
<h3 align="center">Main Branch</h3>

<h4>Data</h4>
<h5>Datasets</h5>
<a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/main/Data/Datasets">This folder</a> contains CSV, text and R object files containing the gene count data, labels and metadata for three scRNA-seq datasets. These are downloaded and opened automatically in notebook Clustering_and_TDA.ipynb.

<h5>Benchmark_Autoencoder, Simulated_Autoencoder and Evaluation_Autoencoder</h5>
These folders contain zip files that are opened automatically in notebook Clustering_and_TDA.ipynb and do not need to be manually downloaded. These files allow the state of trained autoencoders to be reloaded for the three datasets to avoid training new models every time the notebook is run. Within each zip is a model checkpoint file containing the model weights, as well as text files listing the cells / samples selected for the testing, training and validation data to ensure training and testing data does not overlap when the notebook is run again.

<a id="code">
<h4>Jupyter_Notebooks</h4>
<h5>Splat_Simulator</h5>
The purpose of notebook <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Splat_Simulator.ipynb">Splat_Simulator.ipynb</a> is to produce new, artificial scRNA-seq data. For this project, it was used to create the simulated dataset, though can easily be altered to make new data for other purposes.

Gene counts and group labels are generated using the Splat simulator, which is part of the R package Splatter, and so the code contains a mix between Python and inline R. To mimick true biological gene expression, the benchmark dataset has been set to use as a seed, though this could be swapped out to imitate another dataset. After seeding the simulator, datapoints are generated with each belonging to one of four groups. The new data and labels are then saved as CSV files using Python. These can be downloaded and reopened to use in Clustering_and_TDA.ipynb.

<h5>Clustering_and_TDA</h5>
In the notebook <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Clustering_and_TDA.ipynb">Clustering_and_TDA.ipynb</a>, experimentation is performed on the three given datasets. However, it has been designed so that it could be easily run with new data.

First the datasets and their target labels are opened as dataframes. These datasets are downloaded from URL so that the notebook can be run with no set up required. Next, a dataset is selected and an autoencoder with customisable hyperparameters created using PyTorch Lightning to use as a feature extractor for the gene counts. Then clustering is performed to divide cells into groups which show similar gene expression. Several clustering algorithms can be chosen including: k-means, agglomerative hierarchical, BIRCH, mini-batch k-means, spectral and Gaussian mixture. The encoding produced by the autoencoder can optionally be used, along with other dimensionality reduction methods such as PCA, ICA or NMF and techniques such as standardization and t-SNE. At the end of the notebook, Kepler Mapper is run on the gene counts to produce a simplicial complex to reveal the topological shape of the high-dimensional data.

<a id="pagesbranch">
<h3 align="center">GitHub Pages Branch</h3>
<h5>Graphs</h5>
In <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs">this folder</a>, interactive HTML graphs from experiments with clustering and topological data analysis are located.
<ul>
  <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Target_Groups">Target_Groups</a> - graphs of expected cells lines / groups</li>
  <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/K-Means">K-Means</a> - experiments with k-means clustering</li>
  <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Hierarchical_Clustering">Hierarchical_Clustering</a> - experiments with agglomerative hierarchical clustering</li>
  <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Alternative_Algorithms">Alternative_Algorithms</a> - experiments with other clustering algorithms</li>
  <li><a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Topological_Data_Analysis">Topological_Data_Analysis</a> - simplicial complexes produced through Kepler Mapper</li>
</ul>

<h5>Notebooks</h5>
<a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Notebooks">This folder</a> contains HTML versions of the executed notebooks:
<ul>
  <li><a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/Notebooks/Splat_Simulator.html">Splat_Simulator</a></li>
  <li><a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/Notebooks/Clustering_and_TDA.html">Clustering_and_TDA</a></li>
</ul>

<h5>Website</h5>
Other folders provide the HTML, CSS, JavaScript and assets required to host the GitHub pages site.
