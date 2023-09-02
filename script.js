var tl = gsap.timeline({
    repeat: -1
});

tl
.to(".name",{
    width: "200%",
    ease: Expo.easeInOut,
    duration: 4,
    stagger: 3,
},'connect')





gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

gsap.from(".details",{
    scrollTrigger: {
        trigger: ".details",
        scroller: ".main",
        scrub: true,
        start: "top 150vh",
        end: "bottom bottom"
    },
    opacity: 1,
    x: "0%",
    y: "-150px",
    ease: "none"
});


gsap.from(".name",{
    scrollTrigger: {
        trigger: ".name",
        scroller: ".main",
        scrub: true,
        start: "top 150vh",
        end: "bottom bottom"
    },
    opacity: 1,
    x: "0%",
    y: "-150px",
    ease: "none"
});



gsap.from(".page1>img",{
    scrollTrigger: {
        trigger: ".page1>img",
        scroller: ".main",
        scrub: true,
        start: "top 50vh",
        end: "bottom bottom"
    },
    opacity: 1,
    x: "0%",
    y: "-150px",
    ease: "none"
});


gsap.from(".red-line",{
    scrollTrigger: {
        trigger: ".red-line",
        scroller: ".main",
        scrub: true,
        start: "top 250vh",
        end: "bottom bottom"
    },
    opacity: 1,
    x: "-250px",
    // y: "-150px",
    ease: "none"
});

gsap.from(".icons",{
    scrollTrigger: {
        trigger: ".icons",
        scroller: ".main",
        scrub: true,
        start: "top 250vh",
        end: "bottom bottom"
    },
    opacity: 1,
    x: "-250px",
    // y: "-150px",
    ease: "none"
});

