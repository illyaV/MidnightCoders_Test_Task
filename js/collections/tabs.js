define([
  'underscore',
  'backbone',
  'models/tab'
], function(_, Backbone, Tab) {
  'use strict';


  var Tabs = Backbone.Collection.extend({
    model: Tab,
    url: '/assets/tabs.json',

    comparator: function(model) {
      return model.get('order');
    },      

    initialize: function() {
      this.fetch({dataType: "text"});
    },

    parse: function(result) {
      return JSON.parse(result);
    }
  });

  return new Tabs();
});