# pt.1 start implementation

So, little recap:

I want to code, in rust, a Recommendation system with Explicit Feedback using a Matrix factorization techniques.
The matrix will be items-features based since I have only one user.
At the starting point the matrix will be empty.

## plan

1. Initialize the User-Item Vector:
	- Create a vector representing user-item interactions.
	- Each element represents an item.
	- The value of each element represents the explicit feedback from the user for a specific item.


| | item 1 | item 2 | item 3 |
| --- | --- | --- | --- |
| user | liked (+1) | not liked (-1) | liked (+1) |

