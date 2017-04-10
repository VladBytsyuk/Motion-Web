describe("hamburger", function() {

  it("click-state", function() {
  	const previousState = hamburgerAction.isOpen;
  	hamburgerAction.click();
    assert.equal(previousState, hamburgerAction.isOpen);
  });

});



describe("slider-portfolio", function() {

  it("click-forward", function() {
  	const previousState = portfolioSlider.currentSlide;
  	portfolioSlider.nextSlide();
    assert.equal((previousState + 1) % 4, portfolioSlider.currentSlide);
  });

  it("click-backward", function() {
    const previousState = portfolioSlider.currentSlide;
    portfolioSlider.prevSlide();
    assert.equal(previousState, (portfolioSlider.currentSlide + 1) % 4);
  });

});



describe("slider-tweets", function() {
 
  it("click-forward", function() {
    const previousState = tweetsSlider.currentSlide;
    tweetsSlider.nextSlide();
    assert.equal((previousState + 1) % 3, tweetsSlider.currentSlide);
  });

  it("click-backward", function() {
    const previousState = tweetsSlider.currentSlide;
    tweetsSlider.prevSlide();
    assert.equal(previousState, (tweetsSlider.currentSlide + 1) % 3);
  });

});



describe("callback-form", function() {

  it("open", function() {
  	callbackAction.open();
    assert.equal(callbackAction.nameField, '');
    assert.equal(callbackAction.phoneField, '');
    assert.equal(callbackAction.adressField, '');
    assert.equal(callbackAction.visibility, 'visible');
    assert.equal(callbackAction.opacity, 1);
  });

  it("close", function() {
    callbackAction.close();
    assert.equal(callbackAction.visibility, 'hidden');
    assert.equal(callbackAction.opacity, 0);
  });

});