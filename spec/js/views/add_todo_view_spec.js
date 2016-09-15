define([
  'views/add_todo_view',
  'views/todos_view',
  'models/todo',
  'collections/todos',
  'ejs'
], function (AddToDoView, ToDosView, ToDo, ToDoCollection) {
  var instance, subject;

  beforeEach(function () {
    var collection = new ToDoCollection();

    instance = new AddToDoView({collection: collection, el: $('body')});
    subject = function () {
      return instance;
    };
  });

  afterEach(function () {
    instance.$el.empty();
  });

  describe('Render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      };
    });

    it('creates input form', function () {
      var expectedLength = 1;

      subject();
      expect(instance.$('.input-form').length).toBe(expectedLength);
    });
  });

  describe('Input with', function () {
    beforeEach(function () {
      var event = {
        type: 'click',
        preventDefault: function () { }
      };

      subject = function (item) {
        instance.render();
        instance.$('#todo-new-input').val(item);
        instance.createNew(event);
      };
    });

    it('empty text is not be added to view', function () {
      var expectedLength = 0;

      subject('');
      expect(instance.$('#todo-view').length).toBe(expectedLength);
    });

    it('only spaces is not be added to view', function () {
      var expectedLength = 0;

      subject('  ');
      expect(instance.$('#todo-view').length).toBe(expectedLength);
    });
  });
});
