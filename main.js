let aboutMe = $('#aboutme');
let uparrow = $('#uparrow');
let downarrow = $('#downarrow');
let page2 = $('#page2');


uparrow.on('click', () => {
	$.scrollTo(page1, 500)
});

aboutMe.on('click', () => {
	$.scrollTo(page2, 500)
});
