var numberOfFaces = 5;

function generateFaces() {

  var leftSide = document.getElementById("leftside");
  var rightSide = document.getElementById("rightside");
  var face = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";

  for (var i = 0; i < numberOfFaces; i++) {
    var position_x = Math.floor((Math.random() * 400) + 1);
    var position_y = Math.floor((Math.random() * 400) + 1);
    var img = document.createElement("img");
    img.setAttribute("src", face);
    img.style.top = position_y + "px";
    img.style.left = position_x + "px";
    leftSide.appendChild(img);
  }

  var leftSideImages = leftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  rightSide.appendChild(leftSideImages);

  var theBody =
    document.getElementsByTagName("body")[0];

  leftSide.lastChild.onclick =
    function nextLevel(event) {
      event.stopPropagation();
      numberOfFaces += 5;
      while (leftSide.firstChild) {
        leftSide.removeChild(leftSide.firstChild);
      }
      while (rightSide.firstChild) {
        rightSide.removeChild(rightSide.firstChild);
      }
      generateFaces();
    };

  theBody.onclick = function gameOver() {
    alert("Game Over");
    theBody.onclick = null;
    leftSide.lastChild.onclick - null;
    while (leftSide.firstChild) {
      leftSide.removeChild(leftSide.firstChild);
    }
    while (rightSide.firstChild) {
      rightSide.removeChild(rightSide.firstChild);
    }
    numberOfFaces = 5;
    generateFaces();
  }

}

generateFaces();