window.onload = function() {
  

  const el = document.getElementById("playMusic");
  el.addEventListener("click", function(){
    document.getElementById("myAudio").play();
  }

  , false);

  // playMusic.addEventListener('click',function(e){
  //   document.getElementById("myAudio").play();
  // })
  
  setInterval(function() {
    
    let randomText = quoteText[Math.floor( Math.random()* quoteText.length )];

    //generate random red, green and blue intensity
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);

    /* A function to return random number from min to max */
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.getElementById('quote').innerHTML = randomText;
    document.getElementById("quote").style.color = "white";
    document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";



}, 3000);
};
