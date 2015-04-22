define([
  'views/app_view',
  'views/new_todo_view'
], function (Index, NewTodoView) {
  describe('Index', function () {
    var instance, subject;

    beforeEach(function () {
      instance = new Index({el: $('body')});
      subject = function () {
        return instance;
      }
    });

    it('initializes a TodoView', function () {
      expect(instance.newTodoView instanceof NewTodoView).toBe(true);
    });

    describe('render', function () {
      beforeEach(function () {
        subject = function () {
          return instance.render();
        }
      });

      it ('appends TodoView element to view element', function () {
        subject();

        expect($.contains(instance.el, instance.newTodoView.el)).toBe(true);
      });

      it('renders todo view', function () {
        var renderTodoViewSpy = spyOn(instance.newTodoView, 'render').and.callThrough();

        subject();

        expect(renderTodoViewSpy).toHaveBeenCalled();
      });
    });
  });
});

