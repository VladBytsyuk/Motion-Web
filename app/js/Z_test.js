describe("hamburger", function() {

  it("click-state", function() {
  });

});


describe("slider-portfolio", function() {

  it("click-forward", function() {
  });

  it("click-backward", function() {
  });

});


describe("slider-tweets", function() {
 
  it("click-forward", function() {
  });

  it("click-backward", function() {
  });

});


describe("callback-form", function() {

  it("open", function() {
  	callbackAction.open();
    assert.equal(callbackAction.nameField, '');
    assert.equal(callbackAction.phoneField, '');
    assert.equal(callbackAction.adressField, '');
    assert.equal(document.getElementById('popup').style.opacity, 1);
  });

  it("close", function() {
    callbackAction.close();
    assert.equal(document.getElementById('popup').style.opacity, 0);
  });

});
