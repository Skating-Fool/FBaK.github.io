const numOfImages = 10
imageIndex = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function bgImageLoop(){
    
    imageIndex = getRandomInt(numOfImages);
    document.body.style.backgroundImage = "url('backgrounds/img".concat(imageIndex,".jpg')");
    /*imageIndex++;
    if(imageIndex == bgImages.length){
        imageIndex = 0;
    }*/

}
setInterval(bgImageLoop, 5000);