A set of marked vertices is *2-dominating* if every unmarked vertex has at least two marked neighbors. Graffiti.pc Conjecture 392b gives an upper bound on how many marks suffice in any finite simple connected graph with at least three vertices.

Let $A$ be the vertices of minimum degree and $X$ the vertices with exactly one neighbor of degree two. Write $\mu(G-A)$ for the maximum number of pairwise disjoint edges after deleting $A$. The minimum size of a 2-dominating set satisfies

$$
\gamma_2(G) \leq \mu(G-A) + |A| + |X|.
$$

The proof marks the vertices in $A$ and $X$ first. A two-coloring then ensures that each remaining vertex has two neighbors that are already marked or have the opposite color. Marking a minimum vertex cover of the remaining edges between colors completes the construction. By König’s theorem, this last step costs at most $\mu(G-A)$ marks.

[Original conjecture, entry 392b](https://www.uhd.edu/academics/sciences/mathematics-statistics/wowii/files/conjectures.json) · [Earlier bound by DeLaViña and coauthors](https://doi.org/10.1016/j.aml.2011.01.013)
