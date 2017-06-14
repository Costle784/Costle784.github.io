//pages
let page1 = $('#page1')
let page2 = $('#page2');
let page3 = $('#page3')
//navigation
let home = $('#home')
let about = $('#about');
let projects = $('#projects');



about.on('click', () => {
	$.scrollTo(page2, 300);
	$(this.about).closest('li').addClass('active').siblings().removeClass('active')
})
home.on('click', () => {
	$.scrollTo(page1, 300);
	$(this.home).closest('li').addClass('active').siblings().removeClass('active')
})
projects.on('click', () => {
	$.scrollTo(page3, 300);
	$(this.projects).closest('li').addClass('active').siblings().removeClass('active')
})
