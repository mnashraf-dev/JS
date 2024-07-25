let points = [2, 4]

[points[0], points[1]] = [points[1], points[0]]


/**
 * Error: 
 * [points[0], points[1]] = [points[1], points[0]]
    ^

    ReferenceError: Cannot access 'points' before initialization
 */


/**
 * Explanation:
 * The code is interpreted as let points = [2, 4][points[0], points[1]] = [points[1], points[0]]
 */


/**
 * Solution:
 * Add a semicolon after the let points = [2, 4] statement at line 1.
 */