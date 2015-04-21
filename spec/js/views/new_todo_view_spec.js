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
        instance.$('input#submit').click();
      }
    });

    it('will add a new item to the todo collection', function () {
      instance.$title().val('a todo');
      subject();
      expect(collection.length).toBe(1)
    });

    it('will not add a empty item', function () {
      instance.$title().val('  ');
      subject();
      expect(collection.length).toBe(0)
    });

    it('will clear the title input', function () {
      instance.$title().val('some value');
      subject();
      expect(instance.$title().val()).toBe('');
    });
  });

  describe('render', function () {
    beforeEach(function () {
      instance.render();
    });

    it ('will get rendered', function () {
      expect(instance.$('input#title').length).toEqual(1);
    })
  });
});
