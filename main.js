//pages
let page1 = $('#page1')
let page2 = $('#page2');
let page3 = $('#page3')
//navigation
let aboutMe = $('#aboutme');
let projects = $('#projects');


let brandstatement= $('#brandstatement');

$("li").on('click', function(){
	$(this).closest('li').addClass('active').siblings().removeClass('active')
});
