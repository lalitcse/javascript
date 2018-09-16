var i = 0;
images = [];
time = 1000;


images[0] = '1.jpg';
images[1] = '2.jpg';
images[2] = '3.jpg';
images[3] = '4.jpg';


function changeImg(){
    document.slide.src = images[i];

    if(i < images.length){
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg;