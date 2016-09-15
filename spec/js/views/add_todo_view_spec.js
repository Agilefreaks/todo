define([
  'views/add_todo_view',
  'views/todos_view',
  'models/todo',
  'collections/todos',
  'ejs'
], function (AddToDoView, ToDosView, ToDo, ToDoCollection) {
  var addToDoView;

  beforeEach(function () {
    var collection = new ToDoCollection();

    addToDoView = new AddToDoView({collection: collection, el: $('body')});
  });

  function setUp(item) {
    var event = {
      type: 'click',
      preventDefault: function () { }
    };

    addToDoView.render();
    addToDoView.$('#todo-new-input').val(item);
    addToDoView.createNew(event);
  }

  afterEach(function () {
    addToDoView.$el.empty();
  });

  describe('Empty Item', function () {
    beforeEach(function () {
      setUp('');
    });

    it('will not be added to view', function () {
      expect(addToDoView.$('#todo-view').val()).toBeUndefined();
    });
  });

  describe('Spaces Item', function () {
    beforeEach(function () {
      setUp('  ');
    });

    it('will not be added to view', function () {
      expect(addToDoView.$('#todo-view').val()).toBeUndefined();
    });
  });
});
