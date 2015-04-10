define([
  'views/todos_view',
  'views/todo_item_view',
  'model/todo',
  'collection/todos',
  'ejs'
], function (ToDosView, ToDoItemView, ToDo, ToDos) {
  var instance, subject, model;

  beforeEach(function () {
    model = new ToDos();
    instance = new ToDosView({model: model});
    subject = function () {
      return instance;
    }
  });

  describe('item is added to collection', function () {
    var newToDo;
    beforeEach(function () {
      subject = function () {
        newToDo = new ToDo();
        model.add(newToDo);
      }
    });

    it('will initialize a todo_item_view', function () {
      subject();
      expect(instance.todoitemView instanceof ToDoItemView).toBe(true);
    });

    it('will set the last item in the collection as model', function () {
      subject();
      expect(instance.todoitemView.model).toBe(newToDo);
    });

    it('will render a todo_item_view', function () {
      subject();
      expect($.contains(instance.el, instance.todoitemView.el)).toBe(true);
    });
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      }
    });

    it('will render an ul', function () {
      subject();
      expect(instance.$el.prop("tagName")).toEqual("UL");
    });
  });
});
