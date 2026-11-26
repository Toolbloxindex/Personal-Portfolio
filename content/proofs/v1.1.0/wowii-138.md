# A 19-vertex counterexample to Graffiti.pc Conjecture 138

AI-assisted research note, 26 November 2026.

**Result.** There is a tree whose longest induced path has 17 vertices, although Conjecture 138 of *Written on the Wall II* requires at least 18. The same construction gives infinitely many counterexamples.

## The published question

Graffiti.pc Conjecture 138, announced on 12 July 2005, proposes the following inequality for every simple connected graph $G$.

$$
\operatorname{path}(G)\ge (2+u(G))\,\operatorname{dist}_{\min}(M(G^2)).
$$

Here $\operatorname{path}(G)$ counts the vertices of a longest induced path. The indicator $u(G)$ is 1 for graphs with a unique maximum independent set and 0 otherwise. The graph $G^2$ joins distinct vertices within distance two in $G$. The set $M(G^2)$ consists of the vertices of maximum degree in $G^2$. The distance on the right is the minimum distance in $G^2$ between distinct members of that set. In our example the set has exactly two members. Using distance in $G$ instead would increase the violation. [Ermelinda DeLaViña, Written on the Wall II, Conjecture 138, pp. 79–80](https://www.uhd.edu/academics/sciences/mathematics-statistics/wowii/files/wowiiaii.pdf#page=80)

## Construction and proof

Take the path with consecutive vertices 0 through 14. Give vertex 0 two additional neighbors, leaves 15 and 16. Give vertex 14 two additional neighbors, leaves 17 and 18. This defines a simple connected tree.

1. **Longest induced path.** A path in a tree is induced. A longest one runs from a leaf at one end to a leaf at the other and contains all 15 spine vertices and two leaves. Thus $\operatorname{path}(G)=17$.
2. **Unique maximum independent set.** An independent set contains no adjacent pair. In any largest such set, each end of the spine must be excluded, since replacing it with its two leaves increases the size. All four leaves must then be included. This leaves the 13-vertex path from 1 to 13. It has a unique independent set of size seven, namely 1, 3, 5, 7, 9, 11, 13. Indeed, seven selected vertices need at least six separators, using up all 13 positions and forcing alternation. Thus $u(G)=1$.
3. **Maximum degree in the square.** In $G^2$, vertex 1 has neighbors 0, 2, 3, 15 and 16. Vertex 13 also has five neighbors by symmetry. Each leaf has three neighbors in the square, each end of the spine has four, and each remaining spine vertex has four. Thus $M(G^2)=\{1,13\}$.
4. **Distance.** Vertices 1 and 13 are 12 edges apart in $G$. An edge of $G^2$ traverses at most two original edges, and the route 1, 3, 5, 7, 9, 11, 13 attains the lower bound of six steps. The proposed inequality therefore reads $17\ge 3\times6=18$, which is false.

## Infinite family

Use a spine of $2m$ edges and two extra leaves at each end, for any integer $m\ge7$. The same argument gives a unique maximum independent set, and the two square-degree maximizers are 1 and $2m-1$. Their square distance is $m-1$. The path number is $2m+3$, and the conjecture requires $3m-3$. The shortfall $m-6$ can be arbitrarily large.

EvanDashRust previously published the same finite counterexample and a formal verification. [Earlier Lean proof](https://github.com/EvanDashRust/Conjecture-Killers/tree/5ea46d1651c936693b8332082de8b45f9c670fab/Results/Graffiti138)
