define([
  'backbone'
], function(Bakbone) {
  return Backbone.View.extend({
    render: function() {
      this.$el.html('<table class="table"><tr><td>Dummy</td><td>Table</td></tr><tr><td>Dummy</td><td>Table</td></tr><tr><td>Dummy</td><td>Table</td></tr></table>');
    }
  })
});