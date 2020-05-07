'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * 
 * Identity : Input any value and identity will return back to you the value 
 * the same way 
 * 
 * @param {any datatype} value : The value that will be returned back untouched 
 * 
 * 
 * @return {any datatype} : return the value input untouched 
 * */

function identity(value){
    return value;
}

module.exports.identity = identity;



/**
 * typeOf : Takes any value and defines it as a string.
 *
 * @param {simple datatypes , complex datatypes } value : The value that 
 * will be defined.
 * 
 * @return {string}: returns the type of datatype in a string.
 * 
 * */

function typeOf(value){
    
    
    if(Array.isArray(value)){
        return "array";
    } else if(value === null){
        return "null";
    } else if(typeof value === "string"){
        return "string";
    } else if(typeof value === "object"){
        return "object";
    } else if(typeof value === "boolean"){
        return "boolean";
    } else if(typeof value === "undefined"){
        return "undefined";
    } else if(typeof value === "function"){
        return "function";
    } else if(typeof value === "number"){
        return "number";
    }
    
    
    
    
}
module.exports.typeOf = typeOf;










/**
 * first : Returns the first number of elements in an array based on the given number
 * 
 * @param {array} arr : the array that will be iterarated over
 * 
 * @param {number} num : the number that indicates how many elements from the begining 
 * of the array gets pulled out 
 * 
 *  @return {array} : An Array of first elements pulled out from input array. 
 * If number is greater than the length of array it will return the whole array.
 * If number is negative it will return an empty array. 
 * If number is not given it will return the first element in an array.
 * If array is not an array it will return an empty array.
 * */

function first(arr,num){

    // will need to see if array is given , a number is given , and if so return first number of items in array
    if(!Array.isArray(arr)){
        return [];
    } else if( typeof num !== "number" ){
        return arr[0];
    } else if(num < 0){
        return [];
    }
    // 

arr.splice(num);
return arr;


}


module.exports.first = first;



/**
 * 
 * last :  Returns the last number of elements in an array based on the given number
 * 
 * @param {array} arr : the array that gets itterated over 
 * @param {number} num : the number that indicates the last amount of elements to 
 * be pulled out from array
 * 
 * @return {array}: Array of last elements pulled out from input array. 
 * If number is not given it will return the last element in array. 
 * If array is not an array it will return an empty array.
 * If number is greater than the length of array it will return the whole array.
 * If number is negative it will return an empty array.
 * */

function last(arr,num){
     // will need to see if given value is an array , if not return arr literal
     if(!Array.isArray(arr) || num < 0){
        return [];
    //will need to see if given value is a number, if not return first element in arr 
    } else if(typeof num !== "number"){
        return arr[arr.length-1];
    } else if(num > arr.length){
        return arr;
    }
    // based on given number must return the last elements at that index

  // will use method .splice to get numbers from end of array
  // to pull from the back we must flip the truthy of given number to negative ***fix this note 
   return arr.splice(arr.length-num)
   } 
   
module.exports.last = last;
   
   
   
    /**
    * indexOf : Returns the index at which the given value first appears
    * 
    * @param {array} arr : the array that will be iterated through 
    * @param {value} val : A datatype that will be searched for in array
    * 
    * @returns {number} : the index at which the value first appears. If value is 
    * not an array negative 1 will be returned 
    * */
   
   
function indexOf (arr,val){
    
    
    // need to itterate through array to find first occurance of value 
    for(var i = 0; i < arr.length; i++){
     // Once found must return index at which the value is found  
    // stop loop once value is found 
        if(arr[i] === val){
         return i;
        
     //if value is not found output negative 1      
    } 
    
    
         
    }
    
 return -1;

}

module.exports.indexOf = indexOf;






/**
 * contains : Will return true if array contains a value, otherwise false.
 * 
 * @param {array} arr : The array that will be iterated over to check for a particular value 
 * @param {datatype} val : The value that will be searched for in array 
 * 
 * @return {boolean} : based on the given value it will return true if it's in the array
 * and false if not.
 * */


function contains(arr,val){
    // need to have access to all array elements
    // need a var to contain answer 
    var answer = false;
    for(var i = 0; i < arr.length; i++){
        // if array element is equal to value return true , otherwise false
        if(arr[i] === val){
            answer = true;
        }
    }
    return answer ;
};


module.exports.contains = contains;




/**
 * unique : Will output a new array with duplicate values removed from given array.
 * 
 * @param {array} arr : The array that will be iterated over to check for duplicate values 
 * 
 * @return {array} : a new array of duplicates removed 
 * 
 **/

function unique(arr){
// will need to create array literal to contain new elements 
var newArray = [];

 
// will need to cycle through given array 
// will invoke indexof to see if element exist in newArray. if not put value in 
// if equals to negative one push in array
for(var i = 0; i < arr.length; i++){
   if(indexOf(newArray,arr[i]) === -1){
       newArray.push(arr[i]);
   }
}

// return new array
return newArray

}


module.exports.unique = unique;




/**
 * 
 * filter : Will take an action function that acts on all elements in a given array 
 * and return a new array for which all values resulte in a boolean value true. 
 * 
 * 
 * @param {array} arr: The array that will be iterated through to pass elements through 
 * given function 
 * 
 *@param {function} func : The function that will act on each element, each index,
 * and the entire collection.
 * 
 * @return {array} : A new array of all passed values 
 **/

function filter(arr,func){
   // will create array literal to contain passed elements 
 var pass = [];  
   // call each to itterate through array 
         each(arr, function(e,i,arr){
             // need an if statement to determine if value is true 
             if(func(e,i,arr) === true){
                 pass.push(e);
              }
        
    })
    
    
    
    return pass;
    
}

module.exports.filter = filter;






/**
 * 
 * reject : Will return an array of false values that function returned false for 
 * or an array of falsy elements if function is not given
 * 
 * @param {array} arr : the array that will be iterated over to test if values are 
 * true or false based on the return value from given function call;
 * 
 * @param {function} func: The function that will act on each element, each index,
 * and the entire collection.
 * 
 * @return {array} : An array of all falsy elements or false values
 * 
 * */

function reject(arr,func){
    // will call filter to output an array of passed values from given array that func passed 
   var pass = filter(arr,func)
   // will create an array literal to contain failed values 
   var fail = [];
  // will need to cycle through arr 
  for(var i =0; i < arr.length; i++){
      // will call on contains to check if a value does not exist in pass
      // if it does push that value into fail
    if(! contains(pass,arr[i]))
    { fail.push(arr[i]);
          }
  }
 
  // returned failed array;
  return fail;
  
}

module.exports.reject = reject;





/**
 * partition : Will create an array with two other arrays inside of it for true and 
 * false values given back from a given action function.
 * 
 * @param {array} arr : an array that will be iterated over to pass through given function 
 * @param {function} func : The function that will act on each element, each index,
 * and the entire collection.
 * 
 * @return {array} : An array of two arrays inside of it. One false and true for which 
 * the action function acted on.
 * 
 * */

function partition(arr,func){
    
  var truAndFalse = [];  
  // will invoke filter to put all pass values in array
 var pass =  filter(arr,func)
    truAndFalse.push(pass);
  // will invoke reject to put all failed values in array 
  var fail = reject(arr,func)
  truAndFalse.push(fail);
  
  
    //return array of both true and false arrays 
    return truAndFalse
    
}


module.exports.partition = partition;








/**
 *  map : Creates a new array with the results of calling a function for evey element in 
 * given array.
 * 
 * @param {array or object } collect: The collection that will be iterated over to pass 
 * values through given function 
 * 
 * @param {function} func : The function that will act on all elements 
 * 
 * @return {array} : Returns new array with the results of calling a function for evey element in 
 * given array.
 *
 * */

function map(collect,func){
    
    var values = []
    
    // will invoke each to itterate through both types of collections
    each(collect, function(e,i,collection){
       values.push(func(e,i,collection))
        
    })
    
    
   // return array 
    return values;
}


module.exports.map = map;








/**
 * pluck : Puts all values in an array that matches the given property
 * 
 * @param { array } arrayOfObjs: the array with objects inside that will be checked 
 * for a match with given property.
 * 
 * @param {string} prop : This key(string) will be searched for in object.
 *
 * @return {array} : An array that matched the values of the identical keys.
 * 
 * */

function pluck(arrayOfObjs, prop){
    
// will need to access array of objects 
var propVal = map(arrayOfObjs,function(object){
     // Based on the given property, will need to access the value of that prop in obj
      return object[prop];
})
 // return array of object values 
    return propVal;
}


module.exports.pluck = pluck;







/**
 * every : If every value is true then the output will be true , otherwise false 
 * 
 * @param {array or object} collect : the collection that will be iterated over
 * 
 * @param {function} func : the function that will act on elements or properties
 * 
 * @return {boolean} will return true if all values are true and false if not.
 * If callback function insn't provided, it will return true if every value in the 
 * collection is a truthy value. False otherwise.
 * 
 * */

function every(collect,func){
    
  // will need a var to hold my boolean
  var answer = true;
  
    // if function exist proceed with calling each 
   if(func){ 
    // will invoke each function to itterate over collection
 each(collect,function(e,i,c){
     // will need to call func with arguments e,i,c
     // if itteration hits a false values switch answer to false 
     if(!func(e,i,c)){
         answer = false;
     }
     
     
     
 }); 
 // if function does not exist just itterate over collection 
   } else if(!func){
       // will invoke each to itterate over collection 
       each(collect,function(e){
           //if all elements are falsy switch answer to false ;
           if(!e){
              answer = false;
           } 
       });
   } 
   
   
   
  // must return boolean  
    return answer ;
};
module.exports.every = every;





/**
 * some: Based on the return value of a given function ,
 * If even one of the values are true in a collection the output will be true , otherwise 
 * false.
 * 
 * @param {array or object} collect : The collection that will be iterated over to pass 
 * values through function 
 * 
 * @param {function} func: The function that will act on values 
 * 
 * @return {boolean} : If even one of the values are true in a collection the output will be true , otherwise 
 * false. 
 * If callback function isn't given, it will return true if even one of the values are true
 * in the collection , false otherwise.
 * 
 * */
function some(collect,func){
 // if all elements are false answer remains false
 // will need to create a default variable to switch to true or false based on condition 
 var answer = false ;
 // will need to identify if func has been given 
 if(func){
  // will need to cycle through collection to pass all arguments to func
 each(collect,function(e,i,c){
  // if at least one element is true return true     
    if(func(e,i,c)){
        answer = true;
    }  
  });
  
   //if function is not provided return true if at least one element is truthy 
 } else if(!func){
     // will invoke each to itterate over collection
     each(collect,function(e){
         //if at least on element is true , switch answer to true 
         if(e){
             answer = true;
         }
     });
 }
 
 
 
 
 // return boolean
 return answer;
    
};
module.exports.some = some;




/**
 * reduce : Will reduce a given array to a single value.
 * 
 * @param {array} array: The array that will be iterted over passing  its elements 
 * to a given function 
 * 
 * @param {function} func: The function that will act on all elements 
 * 
 * @param {string,number,array or object} seed :  Will act as an accumulator or if not given be the first 
 * position in your array.
 * 
 * @return {string,number,array, or object} : Object, array , empty string depends on the objective of your code.
 * */


function reduce (array, func, seed) {
    // use each fucntion to call on each element in the array
    each(array, function(element, i, array){
        // check if seed exists if not return function with first element as seed
        if(seed === undefined) {
            seed = element;
        } else {
            seed = func(seed, element, i);
        }
    });
    // return the seed, single final value
    return seed;
};
 

module.exports.reduce = reduce;






/**
 * extend : Assigns all non existent properties/values from multiple given objects 
 * to the first given object.
 * 
 * @param {objects} ...objects : All objects that will be combined into one object.
 * 
 * @return {object} : An object with all the properties from other given objects 
 * */

function extend(...objects){
   return  Object.assign(...objects);
}


module.exports.extend = extend;