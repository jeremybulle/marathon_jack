/*le 09/01/2019
Développé par BULLE Jérémy
la photo de skin appartient à la marque REEF*/

var nb_carte = 52;
var score_joueur = 0;
var score_croupier = 0;
var tot_partie = 0;
var tot_vic = 0;
var pot = 1500;
var mise = 0;
var list1 = [1,14,27,40];
var list2 = [2,15,28,41];
var list3 = [3,16,29,42];
var list4 = [4,17,30,43];
var list5 = [5,18,31,44];
var list6 = [6,19,32,45];
var list7 = [7,20,33,46];
var list8 = [8,21,34,47];
var list9 = [9,22,35,48];
var list10 = [10,11,12,13,23,24,25,26,36,37,38,39,49,50,51,52];


function random(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

/* modification de l'affichage*/
function createImg(path){
  var img = document.createElement("img");
  img.src = path;
  return img;
}

function addImgInDiv(perso){
  if (perso === "j"){
    id ="carte_joueur";
  }
  else if (perso === "c") {
    id ="carte_croupier";
  }
  var newImg = createImg(path);
  var divJS = document.getElementById(id);
  divJS.appendChild(newImg);
}

/*gestion victoire/defaite */
function depasser(score_joueur){
  if (document.getElementById("points_joueur").innerHTML>42){
    document.getElementById("carte").disabled = true;
    document.getElementById("garder").disabled = true;
    alert("la banque gagne!!");
    tot_partie = tot_partie + 1;
  }
}

function resultat(score_joueur,score_croupier){
  if (score_joueur<43 && score_joueur>score_croupier || score_croupier>42) {
    alert('Vous renportez la partie');
    tot_vic = tot_vic + 1;
    tot_partie = tot_partie + 1;
  }
  else if (score_croupier<43 && score_croupier>=score_joueur) {
    alert('la banque remporte la partie');
    tot_partie = tot_partie + 1;
  }
  document.getElementById("carte").disabled = true;
  document.getElementById("garder").disabled = true;
}

/*gestion du joueur*/
var player_card = function(score_joueur){
  var r_value = random(1,nb_carte);
  path = "./img/"+r_value+".BMP";
  modif_score("j",r_value);
  addImgInDiv("j");
  console.log(score_joueur)
  depasser(score_joueur);
}

/*gestion du croupier*/
var dealer_card = function(){
  i = 1;
  while (score_croupier<score_joueur && score_croupier<43) {
    if(i<7){
      i++;
      var r_value = random(1,nb_carte);
      path = "./img/"+r_value+".BMP";
      modif_score("c",r_value);
      addImgInDiv("c");
    }
  }
  resultat(score_joueur,score_croupier);
}

/*recommencer*/
var reset = function(){
  score_joueur = 0;
  score_croupier = 0;
  document.getElementById("points_joueur").innerHTML = score_joueur ;
  document.getElementById("points_croupier").innerHTML = score_croupier;
  document.getElementById("total_partie").innerHTML = tot_partie;
  document.getElementById("total_vic").innerHTML = tot_vic;
  document.getElementById("carte_joueur").innerHTML="";
  document.getElementById("carte_croupier").innerHTML="";
  document.getElementById("carte").disabled = false;
  document.getElementById("garder").disabled = false;
  player_card();
  var r_value = random(1,nb_carte);
  path = "./img/"+r_value+".BMP";
  modif_score("c",r_value);
  addImgInDiv("c");
}

/*mise a jour des scores*/
function modif_score(perso,r_value){
  if (list1.includes(r_value)){
    valeur_carte = 11;
    if (score_joueur+valeur_carte>42){
      valeur_carte = 1;
    }
    else if ((score_croupier+valeur_carte>42)) {
      valeur_carte = 1;
    }
  }
  else if (list2.includes(r_value)) {
    valeur_carte = 2;
  }
  else if (list3.includes(r_value)) {
    valeur_carte = 3;
  }
  else if (list4.includes(r_value)) {
    valeur_carte = 4;
  }
  else if (list5.includes(r_value)) {
    valeur_carte = 5;
  }
  else if (list6.includes(r_value)) {
    valeur_carte = 6;
  }
  else if (list7.includes(r_value)) {
    valeur_carte = 7;
  }
  else if (list8.includes(r_value)) {
    valeur_carte = 8;
  }
  else if (list9.includes(r_value)) {
    valeur_carte = 9;
  }
  else if (list10.includes(r_value)) {
    valeur_carte = 10;
  }
  if (perso === "j"){
    score_joueur = score_joueur + valeur_carte;
    document.getElementById("points_joueur").innerHTML = score_joueur ;
    return score_joueur;
  }
  else if (perso === "c") {
    score_croupier = score_croupier + valeur_carte;
    document.getElementById("points_croupier").innerHTML = score_croupier;
    return score_croupier;
  }
}
/*modif skin*/

var skin = function(){
  var new_table = document.createElement("img");
  new_table.src = "img/skin_surf.jpg";
  var ancienne_table = document.getElementById("plateau");
  ancienne_table.style.backgroundImage= "url('img/tableskin.png')";
}

var miser = function(){
  pot = pot - 50;
  document.getElementById("pot").innerHTML = pot;
}

var doubler = function(){
  pot = pot - 50;
  document.getElementById("pot").innerHTML = pot;
}

var setUpListeners = function(){
  var buttoncarte = document.getElementById("carte");
  var buttongarder = document.getElementById("garder");
  var buttonrecommencer = document.getElementById("recommencer");
  var buttonskin = document.getElementById("skin");
  var buttonmiser = document.getElementById("miser");
  var buttondoubler = document.getElementById("doubler");
  var buttonnewgame = document.getElementById("newgame");
  buttoncarte.addEventListener("click",player_card);
  buttongarder.addEventListener("click",dealer_card);
  buttonrecommencer.addEventListener("click",reset);
  buttonskin.addEventListener("click",skin);
  buttonmiser.addEventListener("click",miser);
  buttondoubler.addEventListener("click",doubler);
  buttonnewgame.addEventListener("click", newgame);
  player_card()
  var r_value = random(1,nb_carte);
  path = "./img/"+r_value+".BMP";
  modif_score("c",r_value);
  addImgInDiv("c");
}

document.getElementById("points_joueur").innerHTML = score_joueur;
document.getElementById("points_croupier").innerHTML = score_croupier;

window.onload = setUpListeners;
