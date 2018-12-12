function createImg(path){
  var img = document.createElement('img');
  img.src = path;
  retunr img;
}

fuction addImgInDiv(){
  var path = "img/1.BMP";
  var newImg = createImg(path);
  var divJS = document.getElementbyId('myDiv');
  divJS.appendChild(newImg);
}
