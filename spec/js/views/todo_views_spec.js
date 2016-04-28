define([
  'views/todo_views',
  'ejs'
], function (TodoViews) {
  var instance, subject;

  beforeEach(function () {
    instance = new TodoViews();
    subject = function () {
      return instance;
    };
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      };
    });

    it('renders subViews', function () {
      _.each(instance.subViews, function (subView) {
        spyOn(subView, 'render').and.callThrough();
      });

      subject();

      _.each(instance.subViews, function (subView) {
        expect(subView.render).toHaveBeenCalled();
      });
    });

    it('displays subViews', function () {
      subject();

      _.each(instance.subViews, function (subView) {
        expect($.contains(instance.el, subView.el)).toBe(true);
      });
    });
  });
});
