const arrayUtils = require( "./src/arrayUtils" );
const objectArrayUtils = require( "./src/objectArrayUtils" );

module.exports = {
    // Arrays
    distinctArray: arrayUtils.distinctArray,
    inArray: arrayUtils.inArray,
    removeFromArray: arrayUtils.removeFromArray,

    // Object arrays
    sortObjectArray: objectArrayUtils.sortObjectArray,
    objectArrayDifference: objectArrayUtils.objectArrayDifference,
    distinctKeyArray: objectArrayUtils.distinctKeyArray,
    modifyObjectArray: objectArrayUtils.modifyObjectArray,
    filterOnKey: objectArrayUtils.filterOnKey,
    filterCombo: objectArrayUtils.filterCombo,
};