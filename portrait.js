
function randomPick(arr) {
    var selected = arr[Math.floor(Math.random()*arr.length)]
    return selected;}
  
  images = [ 
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/316293/boots.svg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/316293/western.svg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/316293/wheel.svg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/316293/omega.svg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/316293/lambda.svg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/316293/gamma.svg",
   ]
    
    function randomHover () {
      var myImage = document.getElementById('hover');
      var selImage = randomPick(images);
        myImage.src = selImage;
      }
      
      function resetState() {

      var myImage = document.getElementById('hover');
      myImage.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/316293/beer.svg";}
