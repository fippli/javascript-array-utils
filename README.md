# JavaScript Array Utils
Help functions for JavaScript Arrays

## [!]
This package might be a mess and be broken from time to time.
Will try to make it stable but no guarantees.

# Installation
```
npm install @fippli/array-utils
```
or
```
yarn add @fippli/array-utils
```

# How to use

## sortObjectArray
Sorts array with objects.

Arguments | Description | Example
----------|-------------|--------
Object array | Array with javascript objects | [{name: "Optimus prime", type: "Transformer"}, {name: "Batman", type: "Superhero"}, {name: "Magikarp", type: "Pokémon"}]
Key | Object key that the array should be sorted on | "name"
Reverse | Boolean indicating if the sorted order should be reversed | true

Example:
```JavaScript
const characters = [
    {name: "Optimus prime", type: "Transformer"}, 
    {name: "Batman", type: "Superhero"}, 
    {name: "Magikarp", type: "Pokémon"} 
];

sortObjectArray( characters, "name", false );
// Returns:
// [{name: "Batman", type: "Superhero"}, 
//  {name: "Magikarp", type: "Pokémon"} 
//  {name: "Optimus prime", type: "Transformer"}]
         
```

# Bug reports and feature requests are welcome :)