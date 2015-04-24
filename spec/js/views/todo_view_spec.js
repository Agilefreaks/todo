define([
  'views/todo_view',
  'models/todo'
], function (TodoView, Todo) {
  var instance, subject, todo;

  beforeEach(function () {
    todo = new Todo({title: 'my todo'});
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

  describe('check list item', function () {
    beforeEach(function () {
      instance.render();

      $('body').append(instance.$el);
    });

    afterEach(function () {
      instance.remove();
    });

    describe('when list item is checked', function () {
      beforeEach(function () {
        subject = function () {
          instance.$('.checkbox').click();
        }
      });

      it('will add status done to the model', function () {
        subject();

        expect(todo.get('status')).toBe(true)
      });

      it('will add class done to the element', function(){
        subject();

        expect(instance.$('span').hasClass('done')).toBe(true)
      });
    });

    describe('when list item is unchecked', function () {
      beforeEach(function () {
        instance.$('.checkbox').prop('checked', true);
        subject = function () {
          instance.$('.checkbox').click();
        }
      });

      it('will add status undone to the model', function () {
        subject();

        expect(todo.get('status')).toBe(false)
      });

      it('will remove class done from the element', function(){
        instance.$('span').addClass('done');

        subject();

        expect(instance.$('span').hasClass('done')).toBe(false)
      });
    });
  });

  describe('delete list item', function () {
    beforeEach(function () {
      instance.render();

      $('body').append(instance.$el);
    });

    afterEach(function () {
      instance.remove();
    });

    describe('when list item is deleted', function () {
      beforeEach(function () {
        subject = function () {
          instance.$('button').click();
        }
      });

      it('will remove the element', function () {
        subject();

        expect($(document).find(instance.$el).length).toBe(0)
      });

      it('will delete the model from the collection', function () {
        var renderTodoViewSpy = spyOn(todo, 'destroy').and.callThrough();

        subject();

        expect(renderTodoViewSpy).toHaveBeenCalled();
      });
    });
  });
});


