portfolioSlider.init();
tweetsSlider.init();
redrawMenu();
hamburgerAction.close();

window.onresize = () => {
    portfolioSlider.init();
    tweetsSlider.init();
    redrawMenu();
    hamburgerAction.close();
}