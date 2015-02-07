define([
  'backbone'
], function(Bakbone) {
  return Backbone.View.extend({
    render: function() {
      this.$el.html('<ul><li>Dummy List</li><li>Dummy List</li><li>Dummy List</li><li>Dummy List</li></ul>');
    }
  })
});