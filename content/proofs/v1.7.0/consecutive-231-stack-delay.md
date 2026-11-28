## How long can a shuffle avoid its cycle?

Start with a permutation, apply the same stack-sorting rule repeatedly, and count the passes until the order first enters a cycle. Every permutation eventually reaches one: there are only finitely many orders. The question is how long the worst starting order can keep you waiting.

The construction begins with eight entries. Extra entries are inserted in an alternating pattern that preserves enough of the original order to delay the cycle further. For every length $n\geq 8$, this gives a permutation that takes at least $n+3$ passes. The theorem gives a lower bound at every length. How fast the worst delay grows remains open.
