var nb_carte = 52
var score_joueur = 0
var score_croupier = 0


function createImg(path){
  var name = str(random(0,10000000000))
  var img = document.createElement(name));
  img.src = path;
  return img;
}

function addImgInDiv(){
  var newImg = createImg(path);
  var divJS = document.getElementById('myDiv');
  divJS.appendChild(newImg);
}

function addImgInDivp(value){
  var newImg = createImg(path);
  var divJS = document.getElementById("carte_joueur");
  divJS.appendChild(newImg);
}

function random(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

console.log(random(1,nb_carte));


/* ajout des cartes joueur*/

function player_card(){
  var value = random(1,nb_carte)
  path = "./img/"+value+".BMP"
  addImgInDivp(value)
}

/*mise a jour des scores*/

var setUpListeners = function(){
  var buttoncarte = document.getElementById("carte");
  var buttongarder = document.getElementById("garder");
  var buttonrecommencer = document.getElementById("recommencer")
  buttoncarte.addEventListener("click",player_card());
  /*buttongarder.addEventListener("click",);
  buttonrecommencer.addEventListener("click",);*/
}


document.getElementById("points_joueur").innerHTML = score_joueur
document.getElementById("points_croupier").innerHTML = score_croupier

window.onload = setUpListeners;
