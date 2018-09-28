// linearly maps value from the range (a..b) to (c..d)
function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}

// from p5.js
// Re-maps a number from one range to another. 

// In the first example above, the number 25 is converted from a value in the range of 0 to 100 into a value that ranges from the left edge of the window (0) to the right edge (width).

// Syntax
//  map(value, start1, stop1, start2, stop2, [withinBounds])
// Parameters
// value	Number: the incoming value to be converted
// start1	Number: lower bound of the value's current range
// stop1	Number: upper bound of the value's current range
// start2	Number: lower bound of the value's target range
// stop2	Number: upper bound of the value's target range
// withinBounds	Boolean: constrain the value to the newly mapped range
// Returns
// Number: remapped number
