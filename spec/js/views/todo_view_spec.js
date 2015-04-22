define([
  'views/todo_view',
  'models/todo'
], function (TodoView, Todo) {
  var instance, subject;

  beforeEach(function () {
    var todo = new Todo({title: 'my todo'});
    instance = new TodoView({ model: todo });
    subject = function () {
      return instance;
    };
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      }
    });

    it('render todo view', function () {
      var renderTodoViewSpy = spyOn(instance, 'render').and.callThrough();

      subject();

      expect(renderTodoViewSpy).toHaveBeenCalled();
    });
  });

  describe('toggle on list item', function () {
    beforeEach(function () {
      instance.render();
    });

    describe('when list item is hovered', function () {
      beforeEach(function () {
        subject = function () {
          instance.$el.trigger('mouseover');
        }
      });

      it('will show the delete button', function () {
        subject();

        expect(instance.$('button').hasClass('show')).toBe(true);
      });
    });

    describe('when list item is not hovered', function () {
      beforeEach(function () {
        instance.$('button').addClass('show');
        subject = function () {
          instance.$el.trigger('mouseout');
        }
      });

      it('will hide the delete button', function () {
        subject();

        expect(instance.$('button').hasClass('show')).toBe(false);
      });
    });
  });
});


