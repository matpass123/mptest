const words = ["Wake up,ppl...", "The matrix has you.", "Let us tell you why you're here.", "You are here because you know something..","What you know you can't explain, but you feel it", "You've felt it your entire life.","There is something wrong with the world you live in", "You're living in the matrix!","And we're the only ppl who can help you escape!" , "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE", "PRESS ANY KEY TO ESCAPE"]

let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: 0})
//let boxTl = gsap.timeline()

/*boxTl.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})*/
words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 2, text: word})
  masterTl.add(tl)
})
/*if(words == 3){
window.addEventListener('keydown', (event) => {
    event.preventDefault();
    window.location.href='index.html'
})}*/
// Will execute myCallback every 0.5 seconds 
var intervalID = window.setTimeout(pressKey, 46000);

function pressKey() {
 // Your code here
 window.addEventListener('keydown', (event) => {
    event.preventDefault();
    window.location.href='index.html'
})
if (window.addEventListener) {
    var once = false;
    window.addEventListener('touchstart', function(){
        if (!once) {
            once = true;
            // Do what you need for touch-screens only
            window.location.href='index.html'
        }
    });
}
}