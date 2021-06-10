# Clustering and Topological Data Analysis of scRNA-seq Data
## 🧬 About 🧬
This respository consists of two branches hosting the datasets, code, interactive graphs and website for my undergraduate final year project. The aim being to experiment with clustering and topological data analysis to detect hidden gene expression in three different types of datasets. For a brief overview of the work, refer to this respository's <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/">GitHub Pages site</a>.

## 🧬 Main Branch 🧬

### Data
#### Datasets
<a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/main/Data/Datasets">This folder</a> contains CSV, text and R object files containing the gene count data, labels and metadata for three scRNA-seq datasets. These are downloaded and opened automatically in notebook Clustering_and_TDA.ipynb.

#### Benchmark_Autoencoder, Simulated_Autoencoder and Evaluation_Autoencoder
These folders contain zip files that are opened automatically in notebook Clustering_and_TDA.ipynb and do not need to be manually downloaded. These files allow the state of trained autoencoders to be reloaded for the three datasets to avoid training new models every time the notebook is run. Within each zip is a model checkpoint file containing the model weights, as well as text files listing the cells / samples selected for the testing, training and validation data to ensure training and testing data does not overlap when the notebook is run again.

### Jupyter_Notebooks
#### Splat_Simulator
The purpose of notebook <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Splat_Simulator.ipynb">Splat_Simulator.ipynb</a> is to produce new, artificial scRNA-seq data. For this project, it was used to create the simulated dataset, though can easily be altered to make new data for other purposes.

Gene counts and group labels are generated using the Splat simulator, which is part of the R package Splatter, and so the code contains a mix between Python and inline R. To mimick true biological gene expression, the benchmark dataset has been set to use as a seed, though this could be swapped out to imitate another dataset. After seeding the simulator, datapoints are generated with each belonging to one of four groups. The new data and labels are then saved as CSV files using Python. These can be downloaded and reopened to use in Clustering_and_TDA.ipynb.

#### Clustering_and_TDA
In the notebook <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/blob/main/Jupyter_Notebooks/Clustering_and_TDA.ipynb">Clustering_and_TDA.ipynb</a>, experimentation is performed on the three given datasets. However, it has been designed so that it could be easily run with new data.

First the datasets and their target labels are opened as dataframes. These datasets are downloaded from URL so that the notebook can be run with no set up required. Next, a dataset is selected and an autoencoder with customisable hyperparameters created using PyTorch Lightning to use as a feature extractor for the gene counts. Then clustering is performed to divide cells into groups which show similar gene expression. Several clustering algorithms can be chosen including: k-means, agglomerative hierarchical, BIRCH, mini-batch k-means, spectral and Gaussian mixture. The encoding produced by the autoencoder can optionally be used, along with other dimensionality reduction methods such as PCA, ICA or NMF and techniques such as standardization and t-SNE. At the end of the notebook, Kepler Mapper is run on the gene counts to produce a simplicial complex to reveal the topological shape of the high-dimensional data.

## 🧬 GitHub Pages Branch 🧬
#### Graphs
In <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs">this folder</a>, interactive HTML graphs from experiments with clustering and topological data analysis are located.
* <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Target_Groups">Target_Groups</a> - graphs of expected cells lines / groups
* <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/K-Means">K-Means</a> - experiments with k-means clustering
* <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Hierarchical_Clustering">Hierarchical_Clustering</a> - experiments with agglomerative hierarchical clustering
* <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Alternative_Algorithms">Alternative_Algorithms</a> - experiments with other clustering algorithms
* <a href="https://github.com/TomMakesThings/Clustering-and-TDA-of-scRNA-seq-Data/tree/gh-pages/Graphs/Topological_Data_Analysis">Topological_Data_Analysis</a> - simplicial complexes produced through Kepler Mapper

#### Notebooks
This folder contains HTML versions of the executed notebooks:
* <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/Notebooks/Splat_Simulator.html">Splat_Simulator</a>
* <a href="https://tommakesthings.github.io/Clustering-and-TDA-of-scRNA-seq-Data/Notebooks/Clustering_and_TDA.html">Clustering_and_TDA</a>

#### Website
Other folders provide the HTML, CSS, JavaScript and assets required to host the GitHub pages site.
