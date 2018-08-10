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
    return array.indexOf( element ) > -1
};


module.exports = {
    distinctArray: distinctArray,
    inArray: inArray,
};