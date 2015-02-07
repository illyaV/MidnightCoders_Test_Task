define([
  'backbone',
  'collections/tabs'
], function(Backbone, Tabs) {
  'use strict';

  var AppRouter = Backbone.Router.extend({
    routes: {
    	':id': 'activeTab'
    },

    activeTab: function(id) {
      Tabs.trigger("active", id);
    }
  });

  return AppRouter;
});
