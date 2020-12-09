
let winScrollTop;
let section = $('.inter_section');
let offsetTop = [];
let offsetBottom = [];

function setValue(){
  winScrollTop = $(window).scrollTop();

  section.each(function(index, obj){

    offsetTop[index] = $(obj).offset().top;
    offsetBottom[index] = $(obj).offset().top + $(obj).height();

  });

  console.log(offsetTop);
  console.log(offsetBottom);

}

function checkInSection(){

  if(winScrollTop >= offsetTop[0] && offsetBottom[0] > winScrollTop){
    sectionActive(0);
  } else if(winScrollTop >= offsetTop[1] && offsetBottom[1] > winScrollTop){
    sectionActive(1);
  } else if(winScrollTop >= offsetTop[2] && offsetBottom[2] > winScrollTop){
    sectionActive(2);
  } else if(winScrollTop >= offsetTop[3] && offsetBottom[3] > winScrollTop){
    sectionActive(3);
  } else if(winScrollTop >= offsetTop[4] && offsetBottom[4] > winScrollTop){
    sectionActive(4);
  } else if(winScrollTop >= offsetTop[5] && offsetBottom[5] > winScrollTop){
    sectionActive(5);
  } else if(winScrollTop >= offsetTop[6] && offsetBottom[6] > winScrollTop){
    sectionActive(6);
  } else if(winScrollTop >= offsetTop[7] && offsetBottom[7] > winScrollTop){
    sectionActive(7);
  }

}
function sectionActive(index){
  listAction(index);
  changeText(index);
  changeColor(index);
  parallax();
}

function parallax(){

  let scrollHeight = $(document).height();
  let scrollRealHeight = scrollHeight - $(window).height();
  let scrollPercent = winScrollTop / scrollRealHeight ;
  let parallaxDistance = 1100;
  let moveDistance = parallaxDistance * scrollPercent ;

  $('.cube_box').css({
    transform: 'rotateY('+moveDistance+'deg) rotateX('+moveDistance+'deg)'
  })
}

function listAction(index){

  let list = $('.nav_list li a');

  list.removeClass('active');
  list.eq(index).addClass('active');
}

function changeColor(index){
  let targetText = $('.fix_tit');

  if(index === 1 || index ===2 ){
    targetText.addClass('black');
  }else{
    targetText.removeClass('black');
  }
}

function changeText(index){

  let targetText =  $('.fix_tit strong');
  let list = $('.nav_list li a span');
  let getText = list.eq(index).text();

  targetText.text(getText);

}

function init(){

  setValue();
  checkInSection();

}

$(window).scroll(function(){
  winScrollTop = $(window).scrollTop();
  checkInSection();
})

$(function(){

  init();

})

