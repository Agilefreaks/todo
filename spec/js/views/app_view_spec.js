define([
  'views/app_view',
  'views/new_todo_view',
  'ejs'
], function (Index, ToDoView) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({el: $('body')});
    subject = function () {
      return instance;
    }
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      }
    });
    it('will render the new todo_view', function () {
      var renderSpy = spyOn(ToDoView.prototype, 'render').and.callThrough();
      subject();
      expect(renderSpy).toHaveBeenCalled();
    });
  });
});
