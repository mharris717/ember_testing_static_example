mocha.setup('bdd')

onload = function(){
  var runner = mocha.run();
};

var assert = chai.assert;
describe("Widgets", function() {
  t = setupTesting()

  describe("widget index", function() {
    t.startAtRoute("widgets.index")

    it("has 2 widgets", function() {
      assert.equal(t.$("#widgets .widget").length,2)
    })

    it("first widget is green", function() {
      assert.equal(t.$("#widgets .widget:first").text().trim(),'Green')
    })

    describe("click on widget", function() {
      beforeEach(function() {
        t.$("#widgets .widget:first a").click()
      })

      it("widget displays", function() {
        var text = t.$("#widget").text().trim()
        assert.equal(text,"Green")
      })

    })
  })

  describe("widget show", function() {
    beforeEach(function() {
      t.transitionTo("widget",App.Widget.find(1))
    })
    it("widget displays", function() {
      var text = t.$("#widget").text().trim()
      assert.equal(text,"Green")
    })
  })

  

  
})