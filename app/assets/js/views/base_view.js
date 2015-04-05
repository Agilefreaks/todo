define(['backbone', 'ejs'], function (Backbone) {
  return Backbone.View.extend({
    render: function () {
      var template = new EJS({url: 'assets/js/templates/' + this.templateName + '.ejs'});
      var html = template.render({view: this, model: this.model}, {});
      this.$el.append(html);
    }
  });
});