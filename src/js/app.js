require('../css/app.css');
require('../scss/style.scss');

/********** Paste your code here! ************/

$(window).on("load", () => {
  $("body").addClass("hasloaded")
  setTimeout(() => {
    $('.banner-content').addClass('active')
  }, 1500)
$('.header-wrapper').clipthru()

})
$("#menu-button").on("click touch", () => {
  if ($("header").hasClass("menu-open")) {
    $("header").removeClass("menu-open")
  }
  else {
    $("header").addClass("menu-open")
  }

})
$('.slick-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});
$('.accordeon-header').on('click touch',(e)=>{
  const parent=$(e.currentTarget).parent()
  const content=parent.find('.accordeon-content')
  //$('.accordeon-item').removeClass('active')
  //$('.accordeon-content').slideUp()
  if(parent.hasClass('active')){
    parent.removeClass('active')
    content.slideUp()
  }
  else{
    parent.addClass('active')
    content.slideDown()
  }
})
$('.gallery-list .col-lg-4').each((nr,el)=>{
  const index = nr%3 * 0.3
  $(el).addClass('wow fadeInUp').attr('data-wow-delay',index+'s')
})
new WOW().init();
