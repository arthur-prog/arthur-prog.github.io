$( document ).ready(() => {
    let homeContainer = $('.container.home');
    let homeMenuElt  = $('.Menu-list-item.home');
    let projectsContainer = $('.container.projects');
    let projectsMenuElt  = $('.Menu-list-item.projects');
    let skillsContainer = $('.container.skills');
    let skillsMenuElt  = $('.Menu-list-item.skills');
    let aboutContainer = $('.container.about');
    let aboutMenuElt  = $('.Menu-list-item.about');


    homeMenuElt.click(() => {
        homeContainer[0].scrollIntoView({
            behavior: 'smooth'
        });
    });
    projectsMenuElt.click(() => {
        projectsContainer[0].scrollIntoView({
            behavior: 'smooth'
        });
    });
    skillsMenuElt.click(() => {
        skillsContainer[0].scrollIntoView({
            behavior: 'smooth'
        });
    });
    aboutMenuElt.click(() => {
        aboutContainer[0].scrollIntoView({
            behavior: 'smooth'
        });
    });

    //init
    setActiveMenu();

    $(window).on('scroll', () => {
        setActiveMenu();
    });

    function setActiveMenu(){
        let screenHeight = screen.height;
        if(homeContainer[0].getBoundingClientRect().top > -screenHeight * 0.1 &&
            homeContainer[0].getBoundingClientRect().top < screenHeight * 0.5){
            changeActiveMenu(homeMenuElt[0]);
        }
        if(projectsContainer[0].getBoundingClientRect().top > -screenHeight * 0.1 &&
            projectsContainer[0].getBoundingClientRect().top < screenHeight * 0.5){
            changeActiveMenu(projectsMenuElt[0]);
        }
        if(skillsContainer[0].getBoundingClientRect().top > -screenHeight * 0.1 &&
            skillsContainer[0].getBoundingClientRect().top < screenHeight * 0.5){
            changeActiveMenu(skillsMenuElt[0]);
        }
        if(aboutContainer[0].getBoundingClientRect().top > -screenHeight * 0.1 &&
            aboutContainer[0].getBoundingClientRect().top < screenHeight * 0.5){
            changeActiveMenu(aboutMenuElt[0]);
        }
    }

    function changeActiveMenu(elt){
        let activeItem = $('.Menu-list-item.active')[0];
        if(activeItem != null)
        activeItem.classList.remove('active');
        elt.classList.add('active');
    }

});









// var $menu = $('.Menu-list'),
//     $item = $('.Menu-list-item'),
//     // $titleContainer = $('.container.home title'),
//     // $title = $('.container.home h1'),
//     w = $(window).width(), //window width
//     h = $(window).height(); //window height
//
//
// $(window).on('mousemove', function(e) {
//     var offsetX = 0.5 - e.pageX / w, //cursor position X
//         offsetY = 0.5 - e.pageY / h, //cursor position Y
//         dy = e.pageY - h / 2, //@h/2 = center of poster
//         dx = e.pageX - w / 2, //@w/2 = center of poster
//         theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
//         angle = theta * 180 / Math.PI - 90, //convert rad in degrees
//         offsetPoster = $menu.data('offset'),
//         transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform
//
//     //get angle between 0-360
//     if (angle < 0) {
//         angle = angle + 360;
//     }
//
//     //poster transform
//     $menu.css('transform', transformPoster);
//
//     //parallax for each layer
//     $item.each(function() {
//         var $this = $(this),
//             offsetLayer = $this.data('offset') || 0,
//             transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';
//
//         $this.css('transform', transformLayer);
//     });
//
//     // $titleContainer.css('transform', transformPoster);
//     //
//     // $title.each(function() {
//     //     var $this = $(this),
//     //         offsetLayer = $this.data('offset') || 0,
//     //         transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';
//     //
//     //     console.log($this)
//     //
//     //     $this.css('transform', transformLayer);
//     // });
// });