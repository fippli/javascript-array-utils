/*

 */

//
//
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

//
// Check if two arrays are equal
// Arrays may not contain objects
//
const arraysAreEqual = ( array1, array2, sorted ) => {
    // Base case
    if ( array1.length === 0 && array2.length === 0 ) {
        return true;
    }

    if ( !(array1.length === array2.length) ) {
        return false;
    }

    if ( sorted ) {
        if ( array1.sort()[0] === array2.sort()[0] ) {
            return arraysAreEqual( array1.sort().slice( 1 ), array2.sort().slice( 1 ), sorted )
        } else {
            return false;
        }
    } else {
        if ( array1[0] === array2[0] ) {
            return arraysAreEqual( array1.slice( 1 ), array2.slice( 1 ), sorted )
        } else {
            return false;
        }
    }

};


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

//
// Compare if two objects are equal, (not the same)
// TODO: Should be put in its own module "objectUtils"
// include that module in this module...
//
const objectsAreEqual = ( object1, object2 ) => {

    // Compare keys
    const object1Keys = Object.keys( object1 );
    const object2Keys = Object.keys( object2 );

    if ( !(object1Keys.length === object2Keys.length) ) {
        return false
    }

    if ( !arraysAreEqual( object1Keys, object2Keys, true ) ) {
        return false
    }

    // All keys are good, go on
    return object1Keys.filter( key => {
        return object1[ key ] === object2[ key ];
    }).length === object2Keys.length;

};

//
// Check if an object is in an array of objects
//
const inObjectArray = (objectArray, compareObject) => {
    return objectArray.filter( obj => {
        return objectsAreEqual( obj, compareObject );
    }).length > 0;
};

module.exports = {
    distinctArray: distinctArray,
    inArray: inArray,
    removeFromArray: removeFromArray,
    arraysAreEqual: arraysAreEqual,
    sortObjectArray: sortObjectArray,
    objectArrayDifference: objectArrayDifference,
    distinctKeyArray: distinctKeyArray,
    modifyObjectArray: modifyObjectArray,
    filterOnKey: filterOnKey,
    filterCombo: filterCombo,
    inObjectArray: inObjectArray,
};
