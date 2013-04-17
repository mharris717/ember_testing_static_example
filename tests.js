mocha.setup('bdd')

onload = function(){
  var runner = mocha.run();
};

var assert = chai.assert;
describe("Widgets", function() {
  setupTesting.apply(this)

  describe("widget index", function() {
    beforeEach(function() {
      Ember.run(function() {
        App.Router.router.transitionTo("widgets.index")
      })
    })

    it("smoke", function() {
      assert.equal(2,2)
    })

    it("has 2 widgets", function() {
      assert.equal($("#test-app-container #widgets .widget").length,2)
    })

    it("first widget is green", function() {
      assert.equal($("#test-app-container #widgets .widget:first").text().trim(),'Green')
    })

    describe("click on widget", function() {
      beforeEach(function() {
        $("#test-app-container #widgets .widget:first a").click()
      })

      it("widget displays", function() {
        var text = $("#test-app-container #widget").text().trim()
        assert.equal(text,"Green")
      })

    })
  })

  describe("widget show", function() {
    beforeEach(function() {
      Ember.run(function() {
        widget = App.Widget.find(1)
        App.Router.router.transitionTo("widget",widget)
      })
    })
    it("widget displays", function() {
      var text = $("#test-app-container #widget").text().trim()
      assert.equal(text,"Green")
    })
  })

  

  
})