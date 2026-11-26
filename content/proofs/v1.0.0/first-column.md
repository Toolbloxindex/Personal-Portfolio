# Strict log-concavity in the first type-B q-Stirling column

November 26, 2026 · Version 1.0.0 · AI-assisted research note

For the type-B q-Stirling polynomial of the second kind with column index $k=1$, when is each interior coefficient strictly greater than the geometric mean of its two neighbors?

**Theorem.** For $n\ge 2$, all interior coefficients satisfy $a(d)^2>a(d-1)a(d+1)$ exactly when $n\ge 6$. At $n=5$ there is exactly one equality, at degree 1. At $n=2,3,4$ the inequality fails at degree 1. The row $n=1$ is constant and has no interior degrees.

Sagan and Swanson ask for weak log-concavity within each parity class for both type-B families and all columns. This result classifies the stronger adjacent-coefficient property in one column of one family. The wider conjecture remains outside this proof. [Sagan and Swanson, Definition 1.5 and Conjecture 7.5](https://users.math.msu.edu/users/bsagan/Papers/Old/qStB-pub.pdf)

## Proof

Write $F_n$ for the first-column polynomial. Its recurrence gives $F_1=1$ and $F_{n+1}=1+(1+q+q^2)F_n$. Thus

$$
F_n=\sum_{j=0}^{n-1}(1+q+q^2)^j.
$$

All coefficients from degree $0$ through $2n-2$ are positive. Extend the sequence by zero beyond this interval.

Write $a(d)$ for the coefficient of degree $d$. Choosing one linear factor, one quadratic factor or two linear factors in each power, then summing over $j$, gives

$$
a(0)=n,\qquad a(1)=\frac{n(n-1)}{2},\qquad a(2)=\frac{(n+1)n(n-1)}{6}.
$$

At degree one the gap is therefore

$$
a(1)^2-a(0)a(2)=\frac{n^2(n-1)(n-5)}{12}.
$$

This gives the failures at $n=2,3,4$ and the equality at $n=5$. At $n=5$ the full row is $(5,10,20,25,26,19,11,4,1)$. Its successive interior gaps are $0,150,105,201,75,45,5$.

For the induction, let $a$ be the row at $n\ge 5$ and $b$ the coefficients after multiplication by $1+q+q^2$. Suppose $a$ is weakly log-concave and every interior gap at degree at least two is positive. On the positive support, consecutive ratios $a(i)/a(i-1)$ are nonincreasing. Hence $a(i)a(j)\ge a(i-1)a(j+1)$ for $i\le j$. The same inequality holds on the zero extension, since a positive right-hand side places both intermediate indices inside the support.

Fix a new interior degree $d\ge 2$. Set $x_j=a(d-3+j)$ for $j=0,\ldots,4$. Expanding the gap gives

$$
\begin{aligned}
b(d)^2-b(d-1)b(d+1)
 &= (x_1^2-x_0x_2)+(x_1x_2-x_0x_3)\\
 &\quad +(x_1x_3-x_0x_4)+(x_2x_3-x_1x_4)\\
 &\quad +(x_3^2-x_2x_4).
\end{aligned}
$$

Every term is nonnegative by the ratio inequality. Write $D=2n-2$. When $2\le d<D$, the last term is the positive gap of $a$ at $d$. At $d=D$ the last term equals $a(D)^2>0$. At $d=D+1$ the first term is the positive gap at $D-1$. This covers the entire new interior from degree two onward. The extra constant $1$ in $F_{n+1}$ affects only degree zero and hence leaves these gaps intact. The explicit degree-one formula is strictly positive in every new row $n+1\ge 6$. Induction proves the classification.
