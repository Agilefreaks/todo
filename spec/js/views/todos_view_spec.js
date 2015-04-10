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

    it('will render a todo_item_view', function () {
      var $expectedContent = $('<div />');
      spyOn(ToDoItemView.prototype, 'render').and.returnValue({$el: $expectedContent});
      subject();
      expect($.contains(instance.el, $expectedContent[0])).toBe(true);
    })
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
    })
  })
});
