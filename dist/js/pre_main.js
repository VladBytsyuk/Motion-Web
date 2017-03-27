"use strict";

window.onresize = function () {
	portfolioSlider.init();
	tweetsSlider.init();
	redrawMenu();
	hamburgerAction.close();
};