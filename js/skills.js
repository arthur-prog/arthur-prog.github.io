$(function(){
    if(window.innerWidth > 768){
        skillsMove();
    }
});

function skillsMove()
{
    $selector = $("body");
    $skillsContainer = $(".container.skills .blocks");
    $skillsLogoContainer = $(".container.skills #skills");
    $code1 = $("#code-1");
    $code2 = $("#code-2");
    $code3 = $("#code-3");
    $code4 = $("#code-4");
    $code5 = $("#code-5");
    XMove = 0;
    YMove = 0;

    $selector.on("mousemove",function(e){
        var XRel = e.pageX - $skillsContainer.offset().left;
        var YRel = e.pageY - $skillsContainer.offset().top;
        var height = $skillsContainer.height();
        var width = $skillsContainer.width();

        XMove = (((XRel/width) * 100) - 50)/8;
        YMove = (((YRel/height) * 100) - 50)/8;

        updateSkillsView($skillsLogoContainer, $code1, $code2, $code3, $code4, $code5);
    });
}

function updateSkillsView(oLayer, window1, window2, window3, window4, window5)
{
    oLayer.css({"transform":"translate(calc(-50% + " + XMove + "%), calc(-50% + " + YMove + "%))"});
    window1.css({"transform":"translate(calc(" + XMove/2 + "%), calc(" + YMove/2 + "%))"});
    window2.css({"transform":"translate(calc(" + XMove/3 + "%), calc(" + YMove/3 + "%))"});
    window3.css({"transform":"translate(calc(" + XMove/4 + "%), calc(" + YMove/4 + "%))"});
    window4.css({"transform":"translate(calc(" + XMove/5 + "%), calc(" + YMove/5 + "%))"});
    window5.css({"transform":"translate(calc(" + XMove/6 + "%), calc(" + YMove/6 + "%))"});
}