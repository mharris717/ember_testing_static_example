function setupApp() {
  window.App = Em.Application.create();

  App.Router.map(function() {
    this.resource("widgets", function() {
      this.resource("widget", {path: ":widget_id"});
    })
  });

  App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.FixtureAdapter'
  });

  App.Widget = DS.Model.extend({
    color: DS.attr("string")
  });

  App.Widget.FIXTURES = [
    {id: 1, color: "Green"},
    {id: 2, color: "Red"}
  ]

  App.WidgetsRoute = Em.Route.extend({
    model: function() {
      return App.Widget.find();
    }
  });
}

setupApp()