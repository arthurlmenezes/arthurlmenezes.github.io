$('#about').parallax({
	imageSrc: '../img/img-header.jpg',
	speed: 0.8,
})
.css({
	backgroundImage: 'linear-gradient(rgba(0,0,0,.5) 60%, transparent)',
	height: $(window).height();
});

$('#rodape').parallax({
	imageSrc: '../img/bg-footer.jpg',
	speed: 0.7
});
