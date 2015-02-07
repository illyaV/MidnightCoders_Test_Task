define([
	'jquery',
	'underscore',
	'backbone',
	'collections/tabs'
], function($, _, Backbone, Tabs) {
  'use strict';

  var AppView = Backbone.View.extend({
  	el: '#app',

    _tabViews: {},
    _curTabId: null,


  	initialize: function () {
      this.$bars = this.$('#bars');
      this.$tabs = this.$('#tabs');

      this.listenTo(Tabs, 'sync', this.render);
      this.listenTo(Tabs, 'active', this.activeTab);
    },

  	render: function() {
      var $bars = this.$bars.empty(),
          $tabs = this.$tabs.empty();
      
      Tabs.each(function(item) {
        $bars.append('<li id="' + item.get('id') + '-bar" class="bar"><a href="#' + item.get('id') + '">'+item.get('title') + '</a></li>');
        $tabs.append('<div id="' + item.get('id') + '" class="tab"></div>');  
      });

      this.activeTab(this._curTabId);
  	},

  	activeTab: function(id) {
      this._curTabId = id;

      if (Tabs.length == 0) {  
        return;
      }

      this.$('.bar').removeClass('active');
      this.$('.tab').hide();

      if (!id || !Tabs.get(id)) {
        this._curTabId = Tabs.first().get("id");
      }

      this.$('#' + this._curTabId + "-bar").addClass('active');
      this.$('#' + this._curTabId).show();

      this.reqiureTabView(this._curTabId);
  	},

    reqiureTabView: function(id) {
      if (this._tabViews[id]) {
        console.log("View already created.");
        return;
      }
      
      var tabViews = this._tabViews,
          path = Tabs.get(id).get('path');

      if (!path) {
        return;
      }
      
      if (path.indexOf('.js') > 0) {
        path = path.substr(0, path.indexOf('.js'));
      }

      require([
          path
      ], function (TabView) {
        var tabView = new TabView({el: '#' + id});
        tabViews[id] = tabView;
        tabView.render();
      });
    }
  });

	return AppView;
});