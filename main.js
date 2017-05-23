console.log('connected')
let aboutMe = $('#aboutme')

aboutMe.on('click', () => {
	$.scrollTo($('#page2'), 500)
});
