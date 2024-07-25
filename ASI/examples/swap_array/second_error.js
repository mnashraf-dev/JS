let points = [2, 4]

let str = ""

[points[0], points[1]] = [points[1], points[0]]

console.log(points) // Expected Result: [4, 2]
    

/**
 * Error: 
 * I expected the output to be [4, 2] but it is [2, 4]
*/

/**
 * Explanation:
 * The code is interpreted as let str = ""[(points[0], points[1])] = [points[1], points[0]]
 */


/**
 * Solution:
 * Add a semicolon after the let str = "" statement at line 3.
 */