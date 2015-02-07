define([
  'backbone'
], function(Bakbone) {
  return Backbone.View.extend({
    render: function() {
      var canvas = $('<canvas id="dummyChartCanvas"></canvas>')
                     .attr({"width": "200", "height": "200"})
                     .appendTo(this.$el).get(0),
          context = canvas.getContext("2d");

      context.beginPath();
      context.arc(100, 100, 100, 0, 2*Math.PI);
      context.fillStyle="#4888F0";
      context.fill();
      
      context.beginPath();
      context.moveTo(100, 100);
      context.lineTo(100, 200);
      context.arc(100, 100, 100, -(1/2)*Math.PI, 0);
      context.lineTo(100,100);
      context.fillStyle="#DEEF48";
      context.fill();
    }
  })
});