gsap.to(".navbar",{

    backgroundColor : "black",
    duration : 0.5,
    height: "110px",
    scrollTrigger:{

        trigger : ".navbar",
        scroller : "body",
        markers : false,
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }

});

gsap.to(".main",{

    backgroundColor : "black",
    scrollTrigger:{

        trigger : ".main",
        scroller : "body",
        markers : false,
        start : "top -30%",
        end : "top -66%",
        scrub : 2
    }
   
});

gsap.to(".section2 .imgleft, .section2 .text, .section2 .imgright",{

   y:-50,
   opacity : 1,
   duration: 1,
   stagger: 0.4,
   scrollTrigger:{
    trigger:".about",
    scroller : "body",
    markers : false,
    start : "top 60%",
    end:"top 58%",
    scrub : 3

   }
  
  
})

//there is differ b/w gsap.to and gsap.from

gsap.from("#colon1",{

    y:-70,
    x:-70,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
     trigger:".quote",
     scroller : "body",
     markers : false,
     start : "top 80%",
     end:"top 78%",
     scrub : 3
 
    }

})

gsap.to(".section7 .text h4",{

    y:-25,
    duration: 1,
    scrollTrigger:{
        trigger:".section7",
        scroller : "body",
        markers : false,
        start : "top 70%",
        end:"top 68%",
        scrub : 1
    }
})

var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2"); 
var btn3 = document.querySelector("#btn3");

var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");

btn1.addEventListener("click", function() {

 img1.style.animation = 'none';
 img2.style.animation = 'none';
 img3.style.animation = 'none';
 img1.style.opacity = 1;
 img2.style.opacity = 0;
 img3.style.opacity = 0;
 btn1.style.backgroundColor = "#9dcb1f";
 btn2.style.backgroundColor = "white";
 btn3.style.backgroundColor = "white";

})

btn2.addEventListener("click", function() {

    img1.style.animation = 'none';
    img2.style.animation = 'none';
    img3.style.animation = 'none';
    img1.style.opacity = 0;
    img2.style.opacity = 1;
    img3.style.opacity = 0;
    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "#9dcb1f";
    btn3.style.backgroundColor = "white";
   })

btn3.addEventListener("click", function() {

    img1.style.animation = 'none';
    img2.style.animation = 'none';
    img3.style.animation = 'none';
    img1.style.opacity = 0;
    img2.style.opacity = 0;
    img3.style.opacity = 1;
    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "white";
    btn3.style.backgroundColor = "#9dcb1f";
   })

   
   