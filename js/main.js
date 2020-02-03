window.onload = init;

function init() {
    console.log("hello");
    //init controller (we only do this one time)
    
    
var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  // animate panels
  .to("#js-slideContainer", 1,   {x: "-20%"})	
  .to("#js-slideContainer", 1,   {x: "-40%"})
//  .to("#js-slideContainer", 1,   {x: "-60%"})
//  .to("#js-slideContainer", 1,   {x: "-80%"})


  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "600%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller)
  
//  var animation = new bodymovin.loadAnimation({
//      container: document.getElementById('bm'),
//      rendered: 'svg',
//      loop: true;
//      autoplay: true,
//      path: 'data.json'
//  })
    
};
