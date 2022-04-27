var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SPI","category":"page"},{"location":"#SPI","page":"Home","title":"SPI","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SPI.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SPI]","category":"page"},{"location":"#SPI.adjustedrandindex-Tuple{Vector{<:Number}, Vector{<:Number}}","page":"Home","title":"SPI.adjustedrandindex","text":"adjustedrandindex(a::Vector{<:Number}, b::Vector{<:Number}; nbins=50)\n\nArgs:\n\na, vector of numbers\nb, vector of numbers\nnbins, for continuous approximates discrete, for discrete choose nbins>maxnumberof_classes\n\n\n\n\n\n","category":"method"},{"location":"#SPI.calc_spi_mtx-Tuple{Matrix{<:Number}}","page":"Home","title":"SPI.calc_spi_mtx","text":"calc_spi_mtx(A::Matrix; [Nsmps=size(A,1), Nfeats=size(A,2), alpha=1.5, q=.75])\ncalc_spi_mtx(usv::SVD; [Nsmps=size(A,1), Nfeats=size(A,2), alpha=1.5, q=.75])\n\ncomputes the cumulative spectral residual distance for spectral phylogenetic inference\n\n(∑_{p ∈ P} ||UₚΣₚ||₂)²\n\nwhere P are the spectral partitions found with getintervals. \n\nArgs:\n\nA,usv = Matrix or SVD factorization (Matrix is just passed to svd() before calculation)\nalpha, q are passed to getintervals() see its documentation\n\nReturns:\n\ndistance matrix\n\n\n\n\n\n","category":"method"},{"location":"#SPI.calc_spi_trace-Tuple{SVD}","page":"Home","title":"SPI.calc_spi_trace","text":"calc_spi_trace(usv::SVD; alpha=1.5, q=.75)\ncalc_spi_trace(usv::SVD[, taxaidxs]; alpha=1.5, q=.75)\n\ncalculates spectral residual within each partition of spectrum and each pair of taxa\n\nif taxaidxs are provided the U matrix is subset and/or reordered based on those indices.\n\nreturns matrix where rows are spectral partitions and columns are taxa:taxa pairs ordered as the upper triangle in rowwise order. \n\n\n\n\n\n","category":"method"},{"location":"#SPI.calc_spi_tree-Tuple{Any}","page":"Home","title":"SPI.calc_spi_tree","text":"calc_spi_tree(A[, ids; labelinternalnodes=true])\n\nhelper function that immediately returns the newick tree string inferred by SPI\n\n\n\n\n\n","category":"method"},{"location":"#SPI.empiricalMI-Union{Tuple{T}, Tuple{Vector{T}, Vector{T}}} where T<:AbstractFloat","page":"Home","title":"SPI.empiricalMI","text":"empiricalMI(a::Vector{<:Float}, b::Vector{<:Float}[, nbins=50, normalize=false])\n\ncomputes empirical MI from identity of H(a) + H(b) - H(ab). where H = -sum(p(x)*log(p(x))) + log(Δ) the + log(Δ) corresponds to the log binwidth and unbiases the entropy estimate from binwidth choice. estimates are roughly stable from 32 (32^2  1000 total bins) to size of sample. going from a small undersestimate to a small overestimate across that range. We recommend choosing the sqrt(mean(1000, samplesize)) for nbins argument, or taking a few estimates across that range and averaging.\n\nArgs:\n\na, vecter of length N\nb, vector of length N\nnbins, number of bins per side, use 1000 < nbins^2 < length(a) for best results\nnormalize, bool, whether to normalize with mi / mean(ha, hb)\n\nReturns:\n\nMI\n\n\n\n\n\n","category":"method"},{"location":"#SPI.getintervals-Tuple{Vector{<:Number}}","page":"Home","title":"SPI.getintervals","text":"getintervals(S::Vector{<:Number}; alpha=1.5, q=.75)\n\nfinds spectral partitions. Computes log difference between each subsequent singular value and by default selects the differences that are larger than 1.5 * Q3(differences)\n\ni.e. finds breaks in the spectrum that explain smaller scales of variance\n\nArgs:\n\nS = singular values of a SVD factorization\nalpha = scalar multiple of q\nq = which quantile of log differences to use; by default Q3 \n\nReturns:\n\nVector{UnitRange} indices into S corresponding to the spectral partitions\n\n\n\n\n\n","category":"method"},{"location":"#SPI.minspaceneeded-Tuple{Any, Any}","page":"Home","title":"SPI.minspaceneeded","text":"minspaceneeded(n, p; bits=64) = Base.format_bytes(binomial(n,2) * p * bits)\n\nhow much memory is needed to store spectral residual trace\n\n\n\n\n\n","category":"method"},{"location":"#SPI.nwstr-Tuple{Clustering.Hclust}","page":"Home","title":"SPI.nwstr","text":"nwstr(hc::Hclust[, tiplabels::Vector[<:String]])\n\nconvert Hclust to newick tree string Args:\n\nhc, Hclust object from Clustering package\ntiplabels, Vector{<:String} names in same order as distance matrix\n\n\n\n\n\n","category":"method"},{"location":"#SPI.pairwise-Union{Tuple{M}, Tuple{Function, M}} where M<:(AbstractMatrix)","page":"Home","title":"SPI.pairwise","text":"pairwise(func::Function, m::M) where M<:AbstractMatrix\n\nreturns upper offdiagonals of res[k] = func(i, j) where (k, (i,j))  are calculated from enumerate(combinations(1:size(m,2), 2))\n\n\n\n\n\n","category":"method"},{"location":"#SPI.projectinLSV-Union{Tuple{T}, Tuple{Array{T}, SVD{T, Tr, M} where {Tr, M<:(AbstractArray{T})}}} where T<:Number","page":"Home","title":"SPI.projectinLSV","text":"projectinLSV(data::Array{T}, usv::SVD{T}, [window])\n\nreturns estimated left singular vectors (aka: LSV or Û) for new data based on already calculated SVD factorization\n\n\n\n\n\n","category":"method"},{"location":"#SPI.projectinRSV-Union{Tuple{T}, Tuple{Array{T}, SVD{T, Tr, M} where {Tr, M<:(AbstractArray{T})}}} where T<:Number","page":"Home","title":"SPI.projectinRSV","text":"projectinRSV(data::Array{T}, usv::SVD{T}, [window])\n\nreturns estimated transposed right singular vectors (RSV or V̂ᵗ) for new data based on already calculated SVD factorization\n\n\n\n\n\n","category":"method"},{"location":"#SPI.projectout-Tuple{SVD}","page":"Home","title":"SPI.projectout","text":"projectout(usv::SVD, [window])\n\nrecreates original matrix i.e. calculates UΣV or if window is included  creates a spectrally filtered version of the original matrix off of the provided components in window.\n\n\n\n\n\n","category":"method"},{"location":"#SPI.scaledcumsum-Tuple{Any}","page":"Home","title":"SPI.scaledcumsum","text":"scaledcumsum(c; dims=1)\n\ncumsum divided by maximum cumulative value\n\n\n\n\n\n","category":"method"},{"location":"#SPI.spimtx_spaceneeded-Tuple{Any}","page":"Home","title":"SPI.spimtx_spaceneeded","text":"spimtx_spaceneeded(n, p; bits=64) = Base.format_bytes(binomial(n,2) * p * bits)\n\nhow much memory is needed to store SPI distance matrix\n\n\n\n\n\n","category":"method"},{"location":"#SPI.spiresult-Tuple{Matrix{<:Number}}","page":"Home","title":"SPI.spiresult","text":"spiresult(A::Matrix{<:Number})\n\nconvenience function for optaining SVD, SPImtx, and SPItree\n\n\n\n\n\n","category":"method"},{"location":"#SPI.vmeasure_homogeneity_completeness-Tuple{Any, Any}","page":"Home","title":"SPI.vmeasure_homogeneity_completeness","text":"vmeasure_homogeneity_completeness(labels_true, labels_pred; β=1.)\n\ncalculates and returns v-measure, homogeneity, completeness; similar to f-score, precision, and recall respectively\n\nArgs:\n\nβ, weighting term for v-measure, if β is greater than 1 completeness\n\nis weighted more strongly in the calculation, if β is less than 1,  homogeneity is weighted more strongly\n\nCitation:\n\nA. Rosenberg, J. Hirschberg, in Proceedings of the 2007 Joint Conference\n\non Empirical Methods in Natural Language Processing and Computational Natural  Language Learning (EMNLP-CoNLL) (Association for Computational Linguistics,   Prague, Czech Republic, 2007; https://aclanthology.org/D07-1043), pp. 410–420.\n\n\n\n\n\n","category":"method"},{"location":"#SPI.zscore-Tuple{Any}","page":"Home","title":"SPI.zscore","text":"zscore by columns by default. set dims=2 for rows\n\n\n\n\n\n","category":"method"}]
}