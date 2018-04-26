var chocolateBars=['snickers', 'hundred grand','kitkat','skittle']
function addElementToBeginningOfArray(array,element) {

  array.unshift(element)
  return array
}
function destructivelyAddElementToBeginningOfArray(array,element) {

  array[0]=element;
  return array
}
function addElementToEndOfArray(array,element) {
  var arr2=array
  arr2.push(element)
  return arr2
}
function destructivelyAddElementToEndOfArray(array,element) {
  arraty.last=element
  return array
}
