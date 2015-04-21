define([
  'views/new_todo_view',
  'collections/todos'
], function (NewTodo, Todos) {
  var instance, subject, collection;

  beforeEach(function () {
    collection = new Todos();
    instance = new NewTodo({collection: collection});
    subject = function () {
      return instance;
    }
  });

  describe('addTodo', function () {
    beforeEach(function () {
      instance.render();

      subject = function () {
        instance.$el.find('input#submit').click();
      }
    });

    it('will add a new item to the todo collection', function () {
      instance.$el.find('input#title').val('a todo');
      subject();
      expect(collection.length).toBe(1)
    })
  });
});