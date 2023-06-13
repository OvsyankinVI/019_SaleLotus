var post_6 = document.getElementById("post_6");
var post_7 = document.getElementById("post_7");
var post_8 = document.getElementById("post_8");
var post_9 = document.getElementById("post_9");

document.getElementById("bust_6").addEventListener("click", function () {
  post_6.style.display = "block";
  post_7.style.display = "none";
  post_8.style.display = "none";
  post_9.style.display = "none";
}); 
document.getElementById("bust_7").addEventListener("click", function () {
  post_6.style.display = "none";
  post_7.style.display = "block";
  post_8.style.display = "none";
  post_9.style.display = "none";
}); 
document.getElementById("bust_8").addEventListener("click", function () {
  post_6.style.display = "none";
  post_7.style.display = "none";
  post_8.style.display = "block";
  post_9.style.display = "none";
}); 
document.getElementById("bust_9").addEventListener("click", function () {
  post_6.style.display = "none";
  post_7.style.display = "none";
  post_8.style.display = "none";
  post_9.style.display = "block";
}); 