'use strict';

require.config({
	paths: {
    jquery: '../lib/jQuery/jquery-2.1.1.min',
    underscore: '../lib/Underscore/Underscore-1.7.0',
    backbone: '../lib/Backbone/Backbone-1.1.2'
	},

	shim: {
		'underscore': {
			exports: '_'
		},

		'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
		}
	}
});

require([
	'backbone',
  'views/app',
  'routers/router'
], function (Backbone, AppView, Workspace) {
  new AppView();

  new Workspace;
  Backbone.history.start();
});