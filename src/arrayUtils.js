//
// Get distinct array
//
const distinctArray = array => {
    return [ ...new Set( array ) ];
};

module.exports = {
    distinctArray: distinctArray
};