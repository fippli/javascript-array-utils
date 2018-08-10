

//
// Sorts an array with objects e.g. [{id: 1, name: "Optimus Prime"}, {id: 2, name: "Megatron"}]
// pass the array as first argument, and key e.g. "id" or "name" as second argument to sort on
// that key.
// It is optional to select to sort in reveres order or not.
//
const sortObjectArray = ( array, key, reverse = false ) => {

    const sortedArray = array.sort( ( i, j ) => {

        if ( typeof i[ key ] === "string" && typeof j[ key ] === "string" ) {
            return i[ key ] < j[ key ];
        }

        if ( typeof i[ key ] === "number" && typeof j[ key ] === "number" ) {
            return i[ key ] - j[ key ];
        }

        // TODO: Add boolean sorting

        throw "Inconsistent key values in objectArray";

    } );

    return reverse ? sortedArray.reverse() : sortedArray;

};

//
// Get the difference between to arrays with objects
// pass the two arrays and what key to use as reference
//
const objectArrayDifference = ( array1, array2, key ) => {
    return array1.filter( a1 => {
        return array2.map( a2 => {
            return a2[ key ]
        } ).indexOf( a1[ key ] ) < 0;
    } );
};

//
// Get distinct array of a given key
//
const distinctKeyArray = ( objectArray, key ) => {
    return [ ...new Set( objectArray.map( obj => obj[ key ] ) ) ];
};

//
// Modify all keys in an array of objects
//
const modifyObjectArray = ( objectArray, key, modifier ) => {

    return objectArray.map( obj => {
        const newObj = Object.assign({}, obj);
        newObj[ key ] = modifier( obj[ key ] );
        return newObj;
    } )

};

//
// Return all objects where the given key has
// the specified value.
//
const filterOnKey = ( objectArray, key, value ) => {
    return objectArray.filter( obj => {
        return obj[key] === value;
    })
};


//
// Get all combiniations of two key value pairs
// e.g. name = "Optimus Prime" and type = "Alien Robot"
//
const filterCombo = ( objectArray, key1, value1, key2, value2 ) => {
    return   objectArray.filter( obj => {
        return obj[key1] === value1 && obj[key2] === value2;
    })
};

module.exports = {
    sortObjectArray: sortObjectArray,
    objectArrayDifference: objectArrayDifference,
    distinctKeyArray: distinctKeyArray,
    modifyObjectArray: modifyObjectArray,
    filterOnKey: filterOnKey,
    filterCombo: filterCombo,
};
