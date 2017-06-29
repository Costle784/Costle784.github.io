//pages
let page1 = $('#page1container')
let page2 = $('#page2container');
let page3 = $('#page3container')
//navigation
let home = $('#home')
let about = $('#about');
let projects = $('#projects');
let header = $('#header')


about.on('click', (e) => {
	$.scrollTo(page2, 200);
	$(this.about).closest('li').addClass('active').siblings().removeClass('active')
})
home.on('click', () => {
	$.scrollTo(page1, 200);
	$(this.home).closest('li').addClass('active').siblings().removeClass('active')
})
projects.on('click', () => {
	$.scrollTo(page3, 200);
	$(this.projects).closest('li').addClass('active').siblings().removeClass('active')
})

$(window).scroll( () => {
	let scroll = $(window).scrollTop();
	if(scroll < 490) {
		home.closest('li').addClass('active').siblings().removeClass('active')
	}
	else if(scroll > 490 && scroll < 840) {
		about.closest('li').addClass('active').siblings().removeClass('active')
	}
	else {
		projects.closest('li').addClass('active').siblings().removeClass('active')
	}
})
