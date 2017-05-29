//pages
let page1 = $('#page1')
let page2 = $('#page2');
let page3 = $('#page3')
//navigation
let aboutMe = $('#aboutme');
let projects = $('#projects');
let uparrow1 = $('#uparrow1');
let downarrow1 = $('#downarrow1');
let uparrow2 = $('#uparrow2');

let brandstatement= $('#brandstatement');

aboutMe.on('click', () => {
	$.scrollTo(page2, 600)
});
projects.on('click', () => {
	$.scrollTo(page3, 600)
});
uparrow1.on('click', () => {
	$.scrollTo(page1, 600)
});
downarrow1.on('click', () => {
	$.scrollTo(page3, 600)
});
uparrow2.on('click', () => {
	$.scrollTo(page2, 600)
});
