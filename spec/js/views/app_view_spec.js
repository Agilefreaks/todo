define([
  'views/app_view',
  'views/new_todo_view',
  'ejs'
], function (Index, ToDoView) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index();
    subject = function () {
      return instance;
    }
  });

  describe('initialize ', function () {
    beforeEach(function () {
      subject = function () {
        instance.initialize();
      }
    });

    it('will initialize a todo_view', function () {
      subject();
      expect(instance.todoView instanceof ToDoView).toBe(true);
    });
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      }
    });

    it('will render the new todo_view', function () {
      var renderSpy = spyOn(instance.todoView, 'render').and.callThrough();
      subject();
      expect(renderSpy).toHaveBeenCalled();
    });

    it('displays todoView in appView', function () {
      subject();
      expect($.contains(instance.el, instance.todoView.el)).toBe(true);
    });
  });
});
