var post_1 = document.getElementById("post_1");
var post_2 = document.getElementById("post_2");
var post_3 = document.getElementById("post_3");
var post_4 = document.getElementById("post_4");
var post_5 = document.getElementById("post_5");

document.getElementById("bust_2").addEventListener("click", function () {
    post_1.style.display = "none";
    post_2.style.display = "flex";
    post_3.style.display = "none";
    post_4.style.display = "none";
    post_5.style.display = "none";
});
document.getElementById("bust_3").addEventListener("click", function () {
    post_1.style.display = "none";
    post_2.style.display = "none";
    post_3.style.display = "flex";
    post_4.style.display = "none";
    post_5.style.display = "none";
  });
  document.getElementById("bust_4").addEventListener("click", function () {
    post_1.style.display = "none";
    post_2.style.display = "none";
    post_3.style.display = "none";
    post_4.style.display = "flex";
    post_5.style.display = "none";
  });
  document.getElementById("bust_5").addEventListener("click", function () {
    post_1.style.display = "none";
    post_2.style.display = "none";
    post_3.style.display = "none";
    post_4.style.display = "none";
    post_5.style.display = "flex";
  });
  document.getElementById("bust_1").addEventListener("click", function () {
    post_1.style.display = "flex";
    post_2.style.display = "none";
    post_3.style.display = "none";
    post_4.style.display = "none";
    post_5.style.display = "none";
  }); 
