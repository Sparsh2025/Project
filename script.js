function locomotiveAnimation(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
function loaderAnimation(){
    var tl=gsap.timeline();

tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.4,
    delay:0.4,
    opacity:0
})
tl.from("#line-part-1, .line h2, #loader h6",{
    opacity:0,
    onStart:function(){
    var counter=document.querySelector("#line-part-1 h4");
    count=0;
    var zero=setInterval(function(){
       if(count<=100){
        counter.textContent=count;
                count++;
       }
        else{
            stop();
        }
    },32)
    function stop(){
        clearInterval(zero);
    }
   }
})

tl.to("#loader",{
    opacity:0,
    delay:4,
    duration:0.4
})
tl.from('#page1',{
    y:1500,
    delay:0.4,
    duration:0.4,
    opacity:0,
    ease:Power4,
})
tl.to("#loader",{
    display:"none"
})
tl.from("#text1 h1, #text2 h1, #text3 h2, #text4 h1",{
    y:120,
    duration:0.4,
    stagger:0.1,
    opacity:0,
})
tl.from('#nav',{
    opacity:0
})
tl.from('#text1',{
    opacity:0
},"-=1.2")
tl.from('.under',{
    x:100,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".under",
        scroller:"#main",
        start:"top 93%",
        end:"top 80%",
        scrub:true
    }
})
tl.from('.under1',{
    x:100,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".under1",
        scroller:"#main",
        start:"top 93%",
        end:"top 80%",
        scrub:true
    }
})
tl.from('.under2',{
    x:100,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".under2",
        scroller:"#main",
        start:"top 93%",
        end:"top 80%",
        scrub:true
    }
})
tl.from('.under3',{
    x:100,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".under3",
        scroller:"#main",
        start:"top 93%",
        end:"top 80%",
        scrub:true
    }
})
tl.from('.under4',{
    x:100,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".under4",
        scroller:"#main",
        start:"top 93%",
        end:"top 80%",
        scrub:true
    }
})
}

function cursorAnimation(){
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
     Shery.makeMagnet("#nav-2 h4" , {
       });
       var videoConatiner =document.querySelector("#video-container");
       var video=document.querySelector('#video-container video');
       var image=document.querySelector('#video-container img');

       videoConatiner.addEventListener('mouseenter',function(){
       videoConatiner.addEventListener('mousemove',function(dets){
        gsap.to('.mousefollower',{
            opacity:0
        })
        gsap.to('#round',{
            left:dets.x - 510,
            y:dets.y - 320
        })
       })
        videoConatiner.addEventListener('mouseleave',function(){
            gsap.to('.mousefollower',{
                opacity:1
            })
            gsap.to('#round',{
                top: "-10%",
                left: "80%"
           })
        })
    })   
    flag=0;
    videoConatiner.addEventListener('click',function(){
        if(flag == 0){
       video.play();
        video.style.opacity=1;
        image.style.opacity=0;

   document.querySelector('#round').innerHTML=`<i class="ri-pause-mini-fill"></i>`
   gsap.to('#round',{
    scale:0.5
   })
   flag=1;
} else{
    video.pause();
    video.style.opacity=0;
    image.style.opacity=1;

document.querySelector('#round').innerHTML=`<i class="ri-play-mini-fill"></i>`
gsap.to('#round',{
scale:1
})
flag=0; 
}
    })
}
function sheryAnimation() {
    Shery.imageEffect('.images', {
        style: 6,
        config: {
            "noiseDetail": { "value": 7.44, "range": [0, 100] },
            "distortionAmount": { "value": 2.98, "range": [0, 10] },
            "scale": { "value": 36.36, "range": [0, 100] },
            "speed": { "value": 0.79, "range": [0, 1] },
            "zindex": { "value": 9996999, "range": [-9999999, 9999999] },
            "aspect": { "value": 0.8099772135416666 },
            "ignoreShapeAspect": { "value": true },
            "shapePosition": { "value": { "x": 0, "y": 0 } },
            "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
            "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
            "shapeRadius": { "value": 0, "range": [0, 2] },
            "currentScroll": { "value": 0 },
            "scrollLerp": { "value": 0.07 },
            "gooey": { "value": true },
            "infiniteGooey": { "value": false },
            "growSize": { "value": 4, "range": [1, 15] },
            "durationOut": { "value": 1, "range": [0.1, 5] },
            "durationIn": { "value": 1.5, "range": [0.1, 5] },
            "displaceAmount": { "value": 0.5 },
            "masker": { "value": true },
            "maskVal": { "value": 1.31, "range": [1, 5] },
            "scrollType": { "value": 0 },
            "geoVertex": { "range": [1, 64], "value": 1 },
            "noEffectGooey": { "value": true },
            "onMouse": { "value": 0 },
            "noise_speed": { "value": 0.99, "range": [0, 10] },
            "metaball": { "value": 0.61, "range": [0, 2] },
            "discard_threshold": { "value": 0.5, "range": [0, 1] },
            "antialias_threshold": { "value": 0, "range": [0, 0.1] },
            "noise_height": { "value": 0.24, "range": [0, 2] },
            "noise_scale": { "value": 10, "range": [0, 100] }
        },
        gooey: true,
        // debug: false // Set this to true only for debugging
    });
}

locomotiveAnimation();
loaderAnimation();
cursorAnimation();
sheryAnimation();

document.querySelector("#text3").addEventListener('mousemove',function(dets){
    gsap.to('#flag',{
        x:dets.x,
        y:dets.y,
        opacity:1
    })
})
document.querySelector("#text3").addEventListener('mouseleave',function(dets){
    gsap.to('#flag',{
        x:dets.x,
        y:dets.y,
        opacity:0
    })
})