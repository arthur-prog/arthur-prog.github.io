$(function(){
    boxRollovers();
});

function boxRollovers()
{
    $selector = $("body");
    $skillsContainer = $(".container.home .title");
    XAngle = 0;
    YAngle = 0;
    Z = 0;

    $selector.on("mousemove",function(e){
        var $this = $(this);
        var XRel = e.pageX - $this.offset().left;
        var YRel = e.pageY - $this.offset().top;
        var width = $this.width();

        YAngle = -(0.5 - (XRel / width)) * 40;
        XAngle = (0.5 - (YRel / width)) * 40;
        updateView($skillsContainer);
    });
}

function updateView(oLayer)
{
    oLayer.css({"transform":"perspective(3000px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
    oLayer.find("strong").css({"transform":"perspective(3000px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"none","-webkit-transition":"none"});
}