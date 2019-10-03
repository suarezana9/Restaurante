import Slider from './slider';
import elements from './elements';
import Preloader from '../preloader/preloader';
let sliderTitle=document.querySelector("#slider-title");
let sliderText=document.querySelector("#slider-text");
let sliderSubtitle=document.querySelector("#slider-subtitle");
let sliderImage=document.querySelector("#slider-image");
let textContent=document.querySelector("#slider-text-content");

let leftArrow=document.querySelector(".left-arrow");
let rightArrow=document.querySelector(".right-arrow");

let slider=new Slider({
  elements,
    animationFunc:function(element){
        textContent.classList.add("hide");
        sliderImage.classList.add("hide");

        setTimeout(function(){
        sliderTitle.innerHTML=element.title;
        sliderSubtitle.innerHTML=element.subtitle;
        sliderImage.src=element.image;
        sliderText.innerHTML=element.text;
       
        textContent.classList.remove("hide");
        sliderImage.classList.remove("hide");

    }, 800);
        
    },
    speed:4000

});
slider.play();

leftArrow.addEventListener('click', slider.prev);
rightArrow.addEventListener('click', slider.next);

const imagePaths= elements.map(el => el.image);

Preloader.preloadImages({
images:imagePaths,
completed:function(){
  document.querySelector(".controls").style.display ="block";
}
})