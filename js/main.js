// scroll
$(window).scroll(function(){
    $('.header_container, .header_main, ul.navbar_gnb, .enbMap a, .enbShop a, .trigger .icon_bar').addClass('scroll');
    if($(window).scrollTop() == 0){
        $('.header_container, .header_main, ul.navbar_gnb, .enbMap a, .enbShop a, .trigger .icon_bar').removeClass('scroll');
    } 
});

// pc menu
$('.navbar_gnb li, .sub_shadow').on('mouseenter mouseleave',function(aa){ // mouseover mouseout== mouseenter mouseleave
    if($(window).width() > 1239){ // pc(데스크탑) 상태였을 때 실행
        if(aa.type == 'mouseenter'){ // mouseenter 였을 때만 적용
            $('.sub').stop().slideDown(); // stop() 이벤트가 바뀌면 멈춤
            $('.sub_shadow').stop().fadeIn();
        } else {
            $('.sub').stop().slideUp(200, function(){
                $('.sub').removeAttr('style') /*콜백함수*/
            });
            $('.sub_shadow').stop().fadeOut(200, function(){ 
                $(this).removeAttr('style')
            }); // 지저분하게 있는 style 정리
        }
    }
});

// menu scroll 
$('.header_container').hover(function(){
    $('.header_container, .header_main, ul.navbar_gnb, .enbMap a, .enbShop a, .trigger .icon_bar').addClass('menu_on');},
    function(){
        $('.header_container, .header_main, ul.navbar_gnb, .enbMap a, .enbShop a, .trigger .icon_bar').removeClass('menu_on');
    }
);


// mobile menu

const $mainBtn = $('.navbar_gnb > li > a'); // 메인 메뉴 

$mainBtn.click(function(){
    if( $(window).width() < 1240) {     // 모바일 상태였을 때만
        if( !$(this).parents('li').hasClass('on')){ // 클릭한 a 의 부모 li 에 on 클래스가 없을 때
            $('.sub').slideUp(300); // sub 메뉴 누르면 이미 열려있는 메뉴는 닫히고 새로 선택한 메뉴만 오픈
            $('.navbar_gnb > li').removeClass('on');
            $(this).siblings('.sub').slideDown(500); // siblings 형제 요소만 적용
            $(this).parents('li').addClass('on'); // .parents() 나 자신보다 윗단계에 있는 모든 요소
        } else { // 클릭한 부분이 이미 열려 있는 상태 (on 이 이미 있는 상태)
            $('.sub').slideUp(300);
            $(this).parents('li').removeClass('on');
        }
    }
});


const $footerBtn = $('.mFamilySiteContainer');

$footerBtn.click(function(){
    if( $(window).width() < 1240) { 
        if( !$(this).parents('li').hasClass('on')){ 
            
        }
    }
});


// 모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');
    
    if($(this).hasClass('open')){
        $('.gnb').animate({right:0},400);
        $('header').animate({left:-250},400);
    } else {
        $('.gnb').animate({right:-250},200);
        $('header').animate({left:0},200);
    }
})

// 모바일 상태에서 서브 메뉴를 열고 데스크탑 상태로 바꾸면 서브가 그냥 보여지는 상태 (수정하기)


$(window).resize(function(){
    if($(window).width() > 1239){
        $('ul.navbar_gnb').removeAttr('style');
        $('.sub').removeAttr('style');
        $('.navbar_gnb > li').removeClass('on');
    }
});


// footer 


$(document).ready(function(){
    btn = $('.mFamilySiteContainer'); //버튼 아이디 변수 선언
    layer = $('.mFamilySiteBox'); //레이어 아이디 변수 선언

    btn.click(function(){
    layer.toggle(
        function(){layer.addClass('show')}, //클릭하면 show클래스 적용되서 보이기
        function(){layer.addClass('hide')} //한 번 더 클릭하면 hide클래스가 숨기기
    );
    });
});



// 스크롤 이벤트

//   let count=$("#mainCountYear .countContainer").offset().top; //tasteul의 위치값
//   let winH = $(window).height(); //브라우저창 높이값
//   let countH = $("#mainCountYear .countContainer").height()/2; // tasteul의 높이값

//   $(window).on("scroll",function(){
//       if($(window).scrollTop()>count-winH+countlH){ // 1빙그레맛등장
//           $(".countContainer .countBox .countNum").addClass("countUp delay");
//       }
//       if($(window).scrollTop()<count-winH+countlH){ // 1빙그레맛사라짐
//           $(".countContainer .countBox .countNum").removeClass("countUp delay");
//       }
//   });