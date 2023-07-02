// $('#map01-svg #redsea').tooltip({
//   title: '<div class="bk-tooltip-map"><h4 class="head00-tool"> البحر الأحمر</h4><ul><li class="flex-tool"><div class="container-tool"><div class="box-small"></div><div class="head-took-01">الإجمالي </div></div><div class="tool-num">2477</div></li></ul></div>',
//   html: true,
//   placement: 'top',
//   container: 'body'
// });

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
