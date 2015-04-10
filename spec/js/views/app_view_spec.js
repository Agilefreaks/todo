define([
  'views/app_view',
  'views/new_todo_view',
  'views/todos_view',
  'services/session_service',
  'ejs'
], function (Index, NewToDoView, ToDosView, SessionService) {
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

    it('will initialize a new_todo_view', function () {
      subject();
      expect(instance.newToDoView instanceof NewToDoView).toBe(true);
    });

    it('will set the model on the new_todo_view', function () {
      subject();
      expect(instance.newToDoView.model).toBe(SessionService.todos);
    });

    it('will initialize a todos_view', function () {
      subject();
      expect(instance.todosView instanceof ToDosView).toBe(true);
    });

    it('will set the model on the todos_view', function () {
      subject();
      expect(instance.newToDoView.model).toBe(SessionService.todos);
    });

  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      }
    });

    it('displays todoView in appView', function () {
      subject();
      expect($.contains(instance.el, instance.newToDoView.el)).toBe(true);
    });

    it('displays todosView in appView', function () {
      subject();
      expect($.contains(instance.el, instance.newToDoView.el)).toBe(true);
    });
  });
});
