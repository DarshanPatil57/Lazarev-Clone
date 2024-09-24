function navanimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
        height: "21vh",
        duration: 0.2
    })
    tl.to(".nav-part2 h5", {
        display: "block",
        duration: 0.1

    })
    tl.to(".nav-part2 h5 span", {
        y: 0,
        // duration:0.3,
        stagger: {
            amount: 0.5
        }
    })
})
nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1
    })
    tl.to("#nav-bottom", {
        height: 0,
        duration: 0.2
    })
})
}



 function page2Animation(){
    
 var rightelem = document.querySelectorAll(".right-elem")

 rightelem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
       gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1.5
       })
       gsap.to(elem, {borderBottomColor: 'white' ,duration: 0.5 })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
           })
           gsap.to(elem, {borderBottomColor: 'none' ,duration: 0.5 })
     })
     elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x - 50,
            y:dets.y - elem.getBoundingClientRect().y -190
        })
        
     })
 })
 }

 function page3Animation(){
    
var page3 = document.querySelector(".page3-center")
var video = document.querySelector(".page3 video")

page3.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0 
    })
})

video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
    transform: "scaleX(0.7) scaleY(0)",
    opacity: 0,
    borderRadius:"30px"
    })
})
 }

function page5Animation(){
    var section = document.querySelectorAll(".section-right")
    var video = document.querySelector(".section-right video")
    
    section.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            elem.childNodes[3].style.opacity =1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave",function(){
            elem.childNodes[3].style.opacity =0
            elem.childNodes[3].load();
        })
    })
    }

navanimation()
 page2Animation()
page3Animation()
page5Animation()


gsap.to("#page7-part2  h4",{
    x:90,
    duration:1,
    stagger:{
        amount:-0.4
    },
    scrollTrigger:{
        trigger:"#page7-part2 h4",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top -80",
        scrub:true
    }
})

gsap.to("#page7-part3 h4",{
    x:90,
    duration:1,
    stagger:{
        amount:-0.4
    },
    scrollTrigger:{
        trigger:"#page7-part2 h4",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top -80",
        scrub:true
    }
})

gsap.to("#page7-part4  h4",{
    x:90,
    duration:1,
    stagger:{
        amount:-0.4
    },
    scrollTrigger:{
        trigger:"#page7-part2 h4",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top -80",
        scrub:true
    }
})



