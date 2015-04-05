define(['./base_view'], function (BaseView) {
  return BaseView.extend({
    templateName: 'index',

    currentDate: function() {
      return new Date();
    }
  });
});