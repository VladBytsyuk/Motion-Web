const update = () => {
	portfolioSlider.init();
	tweetsSlider.init();
	redrawMenu();
	hamburgerAction.close();
}

window.onload = () => update();

window.onresize = () => update();