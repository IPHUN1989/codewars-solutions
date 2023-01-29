/*The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

Your function takes three arguments:

The height of the column (meters)
The distance that the snail crawls during the day (meters)
The distance that the snail slides down during the night (meters)
Calculate number of day when the snail will reach the top of the column.
*/

// First solution 29-01-2023
function snail(column, day, night) {
    var n = 1
    if (column - day <= 0) {
        return 1
    }
    else {
        while (column > 0) {
            if (column >= 0) { 
                column -= day
                if (column <= 0) {
                return n
            }
            else {
                column += night
                n++
            }
        }
      }
    }
}
    
console.log(snail(10, 3, 2))