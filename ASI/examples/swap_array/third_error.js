let points = [2, 4]

console.log(points)

[points[0], points[1]] = [points[1], points[0]]

console.log(points); // Expected Result: [4, 2]

/**
 * Error:
 * [points[0], points[1]] = [points[1], points[0]]
                          ^

TypeError: Cannot set properties of undefined (setting '4')
 */


/**
 * Explanation:
 * The error is caused due to automatic semicolon insertion (ASI). The code is interpreted as:
 * undefined[points[0], points[1]] = [points[1], points[0]]
 */

/**
 * Solution:
 * Add a semicolon after the console.log(points) statement at line 3.
 */