let i = 0; //start point
let images = [];
let time = 2000; //milliseconds between each image switch

//image list= array values with image paths
images[0]= 'images/shoe9.jpg';
images[1]= 'images/shoe15.jpg';
images[2]= 'images/shoe12.jpg';
images[3]= 'images/shoe13.jpg';


//change image
function changeImg() {
  document.slide.src = images[i];

  if(i< images.length-1){
    i++;
  } else {
    i = 0;
  }
setTimeout("changeImg()", time);
}

//we want changeImg to run initially when page loads
window.onload=changeImg;






