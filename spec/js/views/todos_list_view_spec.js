define([
  'views/todos_list_view',
  'views/todo_view',
  'collections/todos',
  'models/todo'
], function (ListView, TodoView, Todos, Todo) {
  var instance, subject, collection;

  beforeEach(function () {
    collection = new Todos();
    instance = new ListView({collection: collection});
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

    it('render todos list', function () {
      var renderTodoViewSpy = spyOn(instance, 'render').and.callThrough();

      subject();

      expect(renderTodoViewSpy).toHaveBeenCalled();
    });
  });

  describe('adding a new item to the collection', function () {
    beforeEach(function () {

      var todo = new Todo({title: 'my todo'});
      subject = function () {
        collection.push(todo);
      }
    });

    describe('the view has been rendered', function () {
      var $renderedEl;
      beforeEach(function () {
        instance.render();

        $renderedEl = $('<div id="someId"></div>');
        spyOn(TodoView.prototype, 'render').and.returnValue({
          $el: $renderedEl
        });
      });

      it('renders a corresponding view for the item', function () {
        subject();

        expect($.contains(instance.$el[0], $renderedEl[0])).toBe(true);
      });
    });
  });
});


