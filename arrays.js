var chocolateBars=['snickers', 'hundred grand','kitkat','skittle']
function addElementToBeginningOfArray(array,element) {
  var array2=[...array];
  array2.unshift(element)
  return array2
}
function destructivelyAddElementToBeginningOfArray(array,element) {

  array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element) {
  var array2=[...array];
  array2.push(element)
  return array2
}
function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array2=[...array]
  array2=array2.slice(1)
  return array2
}
function destructivelyAddElementToEndOfArray(array) {
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
    return array.slice(0,array.length - 1)
}
