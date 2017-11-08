window.onload = function() {
  setInterval(function() {
    document.getElementById("myAudio").play();
    // var oLink = document.getElementById('link');
    // oLink.addEventListener('click', editContent);

    // function editContent() {
    //   document.getElementById("myAudio").pause();
    //   document.getElementById("myAudio").currentTime = 0;
    // }
    // let randomText = quoteText[Math.round(Math.random()*6)];
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
