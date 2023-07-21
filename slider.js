let flag=0;
function controller(x){
    flag=flag+x;
    slideshow(flag);
}
function slideshow(index){
    let slides=document.getElementsByClassName("slider");
    console.log(slides);
    if(index == slides.length){
        flag=0;
        index=0;
    }
    if(index < 0){
        flag=slides.length-1;
        index=slides.length-1;
    }
    for(img of slides){
        img.style.display="none";
    }
    slides[index].style.display="block";
}
slideshow(flag);