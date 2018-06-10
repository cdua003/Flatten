//sorting type object
var sortingTypes = {
    nosorting: "none",
    ascending: "ascending",
    descending: "descending"
}

/**
 * @param {any} input_array arrays of integers
 * @param {any} flatten_array recursion results
 */
var flattenArray = function (input_array, flatten_array) {
    //keep previous recursion results.
    var results = flatten_array || [];

    if (input_array && input_array.length > 0) {
        input_array.forEach(function (value) {
            if (typeof value === 'number') {
                //add to results if it's number
                results.push(value);
            } else if (value instanceof Array) {
                //recursion for nested array
                flattenArray(value, results);
            }
        });
    }

    return results;
};

/**
 * @param {any} inputStr string from user input
 */
function convertToArray(inputStr) {
    try {
        var value = JSON.parse(inputStr);
        return value;
    } catch (e) {
        return null;
    }
}

/**
 * @param {any} input_array an array of arbitrarily nested arrays of integers
 * @param {any} sorting_type sorting type
 */
function flatten(input_array, sorting_type) {
    var results = flattenArray(input_array);
    if (sorting_type === sortingTypes.ascending) {
        // For ascending sort
        return results.sort((a, b) => a - b); 
    }
    if (sorting_type === sortingTypes.descending) {
        // For descending sort
        return results.sort((a, b) => b - a); 
    }
    //without sorting
    return results;
};


