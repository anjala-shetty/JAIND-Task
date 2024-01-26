
// navbar background color changes when scroll to upwords

document.addEventListener('scroll', function(){
  var scrollPosition = window.scrollY;

  if(scrollPosition > 50 ){
    document.getElementById('navbar').style.backgroundColor = "#002366";
  }
  else{
    document.getElementById('navbar').style.backgroundColor = "transparent";

  }
})