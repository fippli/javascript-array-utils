
const arrayUtils = require( "./src/arrayUtils" );
const objectArrayUtils = require( "./src/objectArrayUtils" );


// Arrays
exports.distinctArray = arrayUtils.distinctArray;
exports.inArray = arrayUtils.inArray;
exports.removeFromArray = removeFromArray;

// Object arrays
exports.sortObjectArray = objectArrayUtils.sortObjectArray;
exports.objectArrayDifference = objectArrayUtils.objectArrayDifference;
exports.distinctKeyArray = objectArrayUtils.distinctKeyArray;
exports.modifyObjectArray = objectArrayUtils.modifyObjectArray;
exports.filterOnKey = objectArrayUtils.filterOnKey;
exports.filterCombo = objectArrayUtils.filterCombo;

