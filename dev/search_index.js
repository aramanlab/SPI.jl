var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SPI","category":"page"},{"location":"#SPI","page":"Home","title":"SPI","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SPI.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SPI]","category":"page"},{"location":"#SPI.UPGMA_tree-Tuple{AbstractMatrix{<:Number}}","page":"Home","title":"SPI.UPGMA_tree","text":"UPGMA_tree(Dij::AbstractMatrix{<:Number})\n\nshorthand for Clustering.hclust(Dij, linkage=:average, branchorder=:optimal)\n\n\n\n\n\n","category":"method"},{"location":"#SPI.adjustedrandindex-Tuple{AbstractVector{<:Number}, AbstractVector{<:Number}}","page":"Home","title":"SPI.adjustedrandindex","text":"adjustedrandindex(a::AbstractVector{<:Number}, b::AbstractVector{<:Number}; nbins=50)\n\nArgs:\n\na, vector of numbers\nb, vector of numbers\nnbins, for continuous approximates discrete, for discrete choose nbins>maxnumberof_classes\n\n\n\n\n\n","category":"method"},{"location":"#SPI.calc_spcorr_mtx-Tuple{AbstractMatrix{<:Number}, Any}","page":"Home","title":"SPI.calc_spcorr_mtx","text":"calc_spcorr_mtx(vecs::AbstractMatrix{<:Number}, window)\ncalc_spcorr_mtx(vecs::AbstractMatrix{<:Number}, vals::AbstractVector{<:Number}, window)\n\nCalculates pairwise spectral (pearson) correlations for a set of observations. \n\nArgs:\n\nvecs, set of left singular vectors or principal components with observations on rows and components on columns\nvals, vector of singular values\nwindow, set of indices of vecs columns to compute correlations across\n\nReturns:\n\ncorrelation matrix where each pixel is the correlation between a pair of observations\n\n\n\n\n\n","category":"method"},{"location":"#SPI.calc_spi_mtx-Tuple{AbstractMatrix{<:Number}}","page":"Home","title":"SPI.calc_spi_mtx","text":"calc_spi_mtx(A::AbstractMatrix; [Nsmps=size(A,1), Nfeats=size(A,2), alpha=1.0, q=0.5])\ncalc_spi_mtx(usv::SVD; [Nsmps=size(A,1), Nfeats=size(A,2), alpha=1.0, q=0.5])\ncalc_spi_mtx(usv::SVD[, SPI.LSVs(); Nsmps=size(A,1), Nfeats=size(A,2), alpha=1.0, q=0.5])\ncalc_spi_mtx(usv::SVD[, SPI.RSVs(); Nsmps=size(A,1), Nfeats=size(A,2), alpha=1.0, q=0.5])\n\ncomputes the cumulative spectral residual distance for spectral phylogenetic inference\n\n(∑_{p ∈ P} ||UₚΣₚ||₂)²\n\nwhere P are the spectral partitions found with getintervals. \n\nArgs:\n\nA,usv = AbstractMatrix or SVD factorization (AbstractMatrix is just passed to svd() before calculation)\nSPI.Left() computes SPI matrix for LSVs; SPI.Right() computes SPI matrix for RSVs\nalpha, q are passed to getintervals() see its documentation\n\nReturns:\n\ndistance matrix\n\n\n\n\n\n","category":"method"},{"location":"#SPI.calc_spi_trace-Tuple{SVD}","page":"Home","title":"SPI.calc_spi_trace","text":"calc_spi_trace(usv::SVD; onrows=true, groups=nothing, alpha=1.0, q=0.5)\ncalc_spi_trace(vecs, vals, groups)\n\ncalculates spectral residual within each partition of spectrum and each pair of taxa\n\nreturns matrix where rows are spectral partitions and columns are taxa:taxa pairs ordered as the upper triangle in rowwise order, or lower triangle in colwise order.\n\nArgs:\n\nmethod: calc_spi_trace(vecs, vals, groups)\nvecs: either usv.U or usv.V matrix\nvals: usv.S singular values vector\ngroups: usually calculated with getintervals(usv.S; alpha=alpha, q=q)\nmethod: calc_spi_trace(usv::SVD; onrows=true, groups=nothing, alpha=1.0, q=0.5)     \nusv: SVD object\nonrows: switch to calculate SPI on rows (U matrix) or columns (V matrix).\ngroups: if nothing groups are calculated with getintervals(usv.S; alpha=alpha, q=q),    otherwise they assume a vector of index ranges [1:1, 2:3, ...] to group usv.S with. \nalpha: passed to getintervals\nq: passed to getintervals\n\n\n\n\n\n","category":"method"},{"location":"#SPI.calc_spi_tree-Tuple{Any}","page":"Home","title":"SPI.calc_spi_tree","text":"calc_spi_tree(A[, ids; labelinternalnodes=true])\n\nhelper function that immediately returns the newick tree string inferred by SPI\n\n\n\n\n\n","category":"method"},{"location":"#SPI.empiricalMI-Union{Tuple{T}, Tuple{AbstractVector{T}, AbstractVector{T}}} where T<:AbstractFloat","page":"Home","title":"SPI.empiricalMI","text":"empiricalMI(a::AbstractVector{<:Float}, b::AbstractVector{<:Float}[, nbins=50, normalize=false])\n\ncomputes empirical MI from identity of H(a) + H(b) - H(ab). where H = -sum(p(x)*log(p(x))) + log(Δ) the + log(Δ) corresponds to the log binwidth and unbiases the entropy estimate from binwidth choice. estimates are roughly stable from 32 (32^2  1000 total bins) to size of sample. going from a small undersestimate to a small overestimate across that range. We recommend choosing the sqrt(mean(1000, samplesize)) for nbins argument, or taking a few estimates across that range and averaging.\n\nArgs:\n\na, vecter of length N\nb, AbstractVector of length N\nnbins, number of bins per side, use 1000 < nbins^2 < length(a) for best results\nbase, base unit of MI (defaults to nats with base=ℯ)\nnormalize, bool, whether to normalize with mi / mean(ha, hb)\n\nReturns:\n\nMI\n\n\n\n\n\n","category":"method"},{"location":"#SPI.explainedvariance-Tuple{AbstractVector{<:Number}}","page":"Home","title":"SPI.explainedvariance","text":"explainedvariance(s::AbstractVector{<:Number})\n\n\n\n\n\n","category":"method"},{"location":"#SPI.getintervals-Tuple{AbstractVector{<:Number}}","page":"Home","title":"SPI.getintervals","text":"getintervals(S::AbstractVector{<:Number}; alpha=1.0, q=0.5)\n\nfinds spectral partitions. Computes log difference between each subsequent singular value and by default selects the differences that are larger than 1.0 * Q2(differences)\n\ni.e. finds breaks in the spectrum that explain smaller scales of variance\n\nArgs:\n\nS = singular values of a SVD factorization\nalpha = scalar multiple of q\nq = which quantile of log differences to use; by default Q2 \n\nReturns:\n\nAbstractVector{UnitRange} indices into S corresponding to the spectral partitions\n\n\n\n\n\n","category":"method"},{"location":"#SPI.getintervalsIQR-Tuple{AbstractVector{<:Number}}","page":"Home","title":"SPI.getintervalsIQR","text":"getintervalsIQR(S::AbstractVector{<:Number}; alpha=1.5, ql=.25, qh=.75)\n\nfinds spectral partitions. Computes log difference between each subsequent singular value and by default selects the differences that are larger than ALPHA * Q3(differences)\n\ni.e. finds breaks in the spectrum that explain smaller scales of variance\n\nArgs:\n\nS = singular values of a SVD factorization\nalpha = scalar multiple of q\nq = which quantile of log differences to use; by default Q3 \n\nReturns:\n\nAbstractVector{UnitRange} indices into S corresponding to the spectral partitions\n\n\n\n\n\n","category":"method"},{"location":"#SPI.ij2k-Tuple{Any, Any, Any}","page":"Home","title":"SPI.ij2k","text":"ij2k(i,j,n)\n\nwith pair (i,j) give index k to the pairs produced by combinations(vec), where vec is length n\n\n\n\n\n\n","category":"method"},{"location":"#SPI.k2ij-Tuple{Any, Any}","page":"Home","title":"SPI.k2ij","text":"k2ij(k, n)\n\nwhich pair (i,j) produces the kth element of combinations(vec), where vec is length n\n\n\n\n\n\n","category":"method"},{"location":"#SPI.minspaceneeded-Tuple{Any, Any}","page":"Home","title":"SPI.minspaceneeded","text":"minspaceneeded(n, p; bits=64) = Base.format_bytes(binomial(n,2) * p * bits)\n\nhow much memory is needed to store spectral residual trace\n\n\n\n\n\n","category":"method"},{"location":"#SPI.numpairs2N-Tuple{Any}","page":"Home","title":"SPI.numpairs2N","text":"    numpairs2N(x)::Integer\nsolve choose(n,k)=x for n\nfor numbers around a trillion use a BigInt for x\n\n\n\n\n\n","category":"method"},{"location":"#SPI.nwstr-Tuple{Clustering.Hclust}","page":"Home","title":"SPI.nwstr","text":"nwstr(hc::Hclust[, tiplabels::AbstractVector[<:String]])\n\nconvert Hclust to newick tree string Args:\n\nhc, Hclust object from Clustering package\ntiplabels, AbstractVector{<:String} names in same order as distance matrix\n\n\n\n\n\n","category":"method"},{"location":"#SPI.pairwise-Union{Tuple{M}, Tuple{Function, M}} where M<:(AbstractMatrix)","page":"Home","title":"SPI.pairwise","text":"pairwise(func::Function, m::M) where M<:AbstractMatrix\n\nreturns upper offdiagonals of res[k] = func(i, j) where (k, (i,j))  are calculated from enumerate(combinations(axes(m,2), 2))\n\n\n\n\n\n","category":"method"},{"location":"#SPI.projectinLSV-Union{Tuple{T}, Tuple{AbstractArray{T}, SVD{T, Tr, M, C} where {Tr, M<:(AbstractArray{T}), C<:AbstractVector{Tr}}}} where T<:Number","page":"Home","title":"SPI.projectinLSV","text":"projectinLSV(data::AbstractArray{T}, usv::SVD{T}, [window])\n\nreturns estimated left singular vectors (aka: LSV or Û) for new data based on already calculated SVD factorization\n\n\n\n\n\n","category":"method"},{"location":"#SPI.projectinRSV-Union{Tuple{T}, Tuple{AbstractArray{T}, SVD{T, Tr, M, C} where {Tr, M<:(AbstractArray{T}), C<:AbstractVector{Tr}}}} where T<:Number","page":"Home","title":"SPI.projectinRSV","text":"projectinRSV(data::AbstractArray{T}, usv::SVD{T}, [window])\n\nreturns estimated transposed right singular vectors (RSV or V̂ᵗ) for new data based on already calculated SVD factorization\n\n\n\n\n\n","category":"method"},{"location":"#SPI.projectout-Tuple{SVD}","page":"Home","title":"SPI.projectout","text":"projectout(usv::SVD, [window])\n\nrecreates original matrix i.e. calculates UΣV or if window is included  creates a spectrally filtered version of the original matrix off of the provided components in window.\n\n\n\n\n\n","category":"method"},{"location":"#SPI.readphylip-Tuple{AbstractString}","page":"Home","title":"SPI.readphylip","text":"readphylip(fn::String)\n\nRead phylip alignment file, return dataframe of IDs and Sequences\n\n\n\n\n\n","category":"method"},{"location":"#SPI.reshape_pairs_to_distance_matrix-Tuple{Any}","page":"Home","title":"SPI.reshape_pairs_to_distance_matrix","text":"reshape_pairs_to_distance_matrix(pairs::Vector; defaultval=zeros)\n\ntake the columnwise vectorized lower diagonal of distance matrix and remake a symetric distance matrix.\n\n\n\n\n\n","category":"method"},{"location":"#SPI.scaledcumsum-Tuple{Any}","page":"Home","title":"SPI.scaledcumsum","text":"scaledcumsum(c; dims=1)\n\ncumsum divided by maximum cumulative value\n\n\n\n\n\n","category":"method"},{"location":"#SPI.spimtx_spaceneeded-Tuple{Any}","page":"Home","title":"SPI.spimtx_spaceneeded","text":"spimtx_spaceneeded(n, p; bits=64) = Base.format_bytes(binomial(n,2) * p * bits)\n\nhow much memory is needed to store SPI distance matrix\n\n\n\n\n\n","category":"method"},{"location":"#SPI.spiresult-Tuple{AbstractMatrix{<:Number}}","page":"Home","title":"SPI.spiresult","text":"spiresult(A::AbstractMatrix{<:Number})\n\nconvenience function for optaining SVD, SPImtx, and SPItree\n\n\n\n\n\n","category":"method"},{"location":"#SPI.vmeasure_homogeneity_completeness-Tuple{Any, Any}","page":"Home","title":"SPI.vmeasure_homogeneity_completeness","text":"vmeasure_homogeneity_completeness(labels_true, labels_pred; β=1.)\n\ncalculates and returns v-measure, homogeneity, completeness; similar to f-score, precision, and recall respectively\n\nArgs:\n\nβ, weighting term for v-measure, if β is greater than 1 completeness\n\nis weighted more strongly in the calculation, if β is less than 1,  homogeneity is weighted more strongly\n\nCitation:\n\nA. Rosenberg, J. Hirschberg, in Proceedings of the 2007 Joint Conference\n\non Empirical Methods in Natural Language Processing and Computational Natural  Language Learning (EMNLP-CoNLL) (Association for Computational Linguistics,   Prague, Czech Republic, 2007; https://aclanthology.org/D07-1043), pp. 410–420.\n\n\n\n\n\n","category":"method"}]
}
