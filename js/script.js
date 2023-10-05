$(function(){
    if(window.innerWidth > 768){
        boxRollovers();
    }
});

function boxRollovers()
{
    $selector = $("body");
    $titleContainer = $(".container.home .title");
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
        updateView($titleContainer);
    });
}

function updateView(oLayer)
{
    oLayer.css({"transform":"perspective(3000px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)", "transition":"none","-webkit-transition":"none"});
}