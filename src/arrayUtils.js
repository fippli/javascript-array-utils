//
// Get distinct array
//
const distinctArray = array => {
    return [ ...new Set( array ) ];
};

//
// Checks if an element is in an array
//
const inArray = ( array, element ) => {
    return array.includes( element );
};

//
// Remove item from array
//
const removeFromArray = ( array, element ) => {
  return array.slice(0, array.indexOf(element) ).concat( array.slice(array.indexOf(element) + 1 ) );
};


module.exports = {
    distinctArray: distinctArray,
    inArray: inArray,
    removeFromArray: removeFromArray,
};