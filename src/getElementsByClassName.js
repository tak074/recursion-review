// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  //create node array
  var nodes = [];

  var element = element || document.body;
  //checking if className is in current node
  if (element.classList.contains(className)) {
    //if yes, push it into node array.
    nodes.push(element);
  }

  console.log(element.children);

  for (var i = 0; i < element.children.length; i++) {
    var miniNodes = getElementsByClassName(className, element.children[i]);
    nodes = nodes.concat(miniNodes);
  }

  //return node array
  return nodes;
};
