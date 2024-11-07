
function randomPick(arr) {
    var selected = arr[Math.floor(Math.random()*arr.length)]
    return selected;}
  
  images = [ 
    "https://i.postimg.cc/mDLsknJ8/emma-do-self-portrait-character-art-serious.png",
    "https://i.postimg.cc/hGqgWvrF/emma-do-self-portrait-character-art-glad.png",
    "https://i.postimg.cc/j5Mr7XrK/emma-do-self-portrait-character-art-pout.png",
    "https://i.postimg.cc/W46V2VWd/emma-do-self-portrait-character-art-shock.png",
    "https://i.postimg.cc/3N65LxRc/emma-do-self-portrait-character-art-sob.png",
    "https://i.postimg.cc/tRmjR25N/emma-do-self-portrait-character-art-stare.png",
   ]
    
    function randomHover () {
      var myImage = document.getElementById('hover');
      var selImage = randomPick(images);
        myImage.src = selImage;
      }
      
      function resetState() {

      var myImage = document.getElementById('hover');
      myImage.src = "https://i.postimg.cc/90zHt7W9/emma-do-self-portrait-character-art-smile.png";}
