var c=0;
$(document).ready(function(){
    $(".menu-c").click(function(){
        $(".sliding-menu").css({"animation": "slidein 1s forwards"});
    });
    $(".cross").click(function(){
        $(".sliding-menu").css({"animation": "slideout 1s forwards"});
    });
    $(".l1").mouseenter(function(){
        $(".p1").css({"animation":"fade-in-right 0.4s forwards"});
        setTimeout(function() {
            $('.p1').css({"animation":"","font-size":"20px"});
        }, 400);
    });
    $(".l1").mouseleave(function(){
        $(".p1").css({"animation":"fade-in-right 0.4s forwards","animation-direction": "reverse"});
        setTimeout(function() {
            $('.p1').css({"animation":"","font-size":"0px"});
        }, 400);
    });
    $(".l2").mouseenter(function(){
        $(".p2").css({"animation":"fade-in-right 0.4s forwards"});
        setTimeout(function() {
            $('.p2').css({"animation":"","font-size":"20px"});
        }, 400);
    });
    $(".l2").mouseleave(function(){
        $(".p2").css({"animation":"fade-in-right 0.4s forwards","animation-direction": "reverse"});
        setTimeout(function() {
            $('.p2').css({"animation":"","font-size":"0px"});
        }, 400);
    });
    $(".l3").mouseenter(function(){
        $(".p3").css({"animation":"fade-in-right 0.4s forwards"});
        setTimeout(function() {
            $('.p3').css({"animation":"","font-size":"20px"});
        }, 400);
    });
    $(".l3").mouseleave(function(){
        $(".p3").css({"animation":"fade-in-right 0.4s forwards","animation-direction": "reverse"});
        setTimeout(function() {
            $('.p3').css({"animation":"","font-size":"0px"});
        }, 400);
    });
    $(".l4").mouseenter(function(){
        $(".p4").css({"animation":"fade-in-right 0.4s forwards"});
        setTimeout(function() {
            $('.p4').css({"animation":"","font-size":"20px"});
        }, 400);
    });
    $(".l4").mouseleave(function(){
        $(".p4").css({"animation":"fade-in-right 0.4s forwards","animation-direction": "reverse"});
        setTimeout(function() {
            $('.p4').css({"animation":"","font-size":"0px"});
        }, 400);
    });
    $(".l5").mouseenter(function(){
        $(".p5").css({"animation":"fade-in-right 0.4s forwards"});
        setTimeout(function() {
            $('.p5').css({"animation":"","font-size":"20px"});
        }, 400);
    });
    $(".l5").mouseleave(function(){
        $(".p5").css({"animation":"fade-in-right 0.4s forwards","animation-direction": "reverse"});
        setTimeout(function() {
            $('.p5').css({"animation":"","font-size":"0px"});
        }, 400);
    });
    $(".num-ccc").counterUp({
        delay: 10,
        time: 3000
    });
    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-setup'),
        handler: function(direction) {
            document.getElementById("remove-invisible-class").classList.remove("invisible-class")
          document.getElementById("to-be-animated").classList.add("slide-top")
          document.getElementById("to-be-animated2").classList.add("slide-top")
          document.getElementById("to-be-animated3").classList.add("slide-top")
          document.getElementById("to-be-animated4").classList.add("slide-top")
          document.getElementById("to-be-animated5").classList.add("slide-top")
          document.getElementById("to-be-animated6").classList.add("slide-top")
          document.getElementById("to-be-animated7").classList.add("slide-top")
        },
        offset: 5
      })
      var waypoint2 = new Waypoint({
        element: document.getElementById('waypoint-setup-2'),
        handler: function(direction) {
            document.getElementById("to-be-animated-8").classList.remove("invisible-class")
            document.getElementById("to-be-animated-8").classList.add("slide-top")
        },
        offset: 5
      })
      $("#scroll-down-button").click(()=>{
          console.log("clicked for scroll down")
          $("html, body").animate({
            scrollTop: $(
              'html, body').get(0).scrollHeight
        }, 2000);
      })
 

      var container=$("html, body");
      $("#scroll-to-about").click(()=>{
          var scrollTo = $(".mid");
            var position = scrollTo.offset().top - container.offset().top + container.scrollTop();
            console.log(position);
            container.animate({
                scrollTop: position
            });
      })
      $("#scroll-to-home").click(()=>{
        var scrollTo = $(".head");
          var position = scrollTo.offset().top - container.offset().top + container.scrollTop();
          console.log(position);
          container.animate({
              scrollTop: position
          });
    })
    $("#scroll-to-services").click(()=>{
        var scrollTo = $(".mid-way-second");
          var position = scrollTo.offset().top - container.offset().top + container.scrollTop();
          console.log(position);
          container.animate({
              scrollTop: position
          });
    })
    $("#scroll-to-contact").click(()=>{
        var scrollTo = $(".footer");
          var position = scrollTo.offset().top - container.offset().top + container.scrollTop();
          console.log(position);
          container.animate({
              scrollTop: position,
          });
    })
})