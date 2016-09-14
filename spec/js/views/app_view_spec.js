define([
  'views/app_view',
  'models/todo',
  'collections/todos',
  'ejs'
], function (Index, ToDo, ToDoCollection) {
  var instance, subject;

  beforeEach(function () {
<<<<<<< HEAD
    instance = new Index({el: $('body'), ToDoCollection: new ToDoCollection()});
=======
    instance = new Index({el: $('body'), ToDoCollection: ToDoCollection});
>>>>>>> origin/17-display-items
    subject = function () {
      return instance;
    };
  });

  describe('Text input', function () {
    it('will be defined', function () {
      subject().render();
      expect(subject().$el.find('input#text')).toBeDefined();
    });
  });

  describe('Button type', function () {
    it('will be defined', function () {
      subject().render();
      expect(subject().$el.find('input#submit')).toBeDefined();
    });
  });

<<<<<<< HEAD
  function setUp(item) {
    var event = {
      type: 'click',
      preventDefault: function () { }
    };

    // Unable to call the event in another way
    // TypeError is thrown when accessing the value of the input
    subject().render();
    subject().$('#todo-new-input').val(item);
    subject().createNew(event);
  }

  describe('Item', function () {
    beforeEach(function () {
      setUp('Test');
    });

    it('will be added to collection', function () {
      var expectedLength = 1;

      expect(subject().toDosView.toDoCollection.length).toBe(expectedLength);
    });

    it('input will be cleared', function () {
      expect(subject().$('#todo-new-input').val()).toMatch('');
    });

    afterEach(function () {
      subject().toDosView.toDoCollection.reset();
    });
  });

  describe('Empty Item', function () {
    beforeEach(function () {
      setUp('');
    });

    it('will not be added to collection', function () {
      var expectedLength = 0;

      expect(subject().toDosView.toDoCollection.length).toBe(expectedLength);
    });
  });

  describe('Empty spaces', function () {
    beforeEach(function () {
      setUp('  ');
    });

    it('will not be added to collection', function () {
      var expectedLength = 0;

      expect(subject().toDosView.toDoCollection.length).toBe(expectedLength);
=======
  describe('ToDo Item', function () {
    var expectedLength = 1;
    var itemToBeAdded = new ToDo({title: 'Test', completed: false});

    it('will be found on view', function () {
      subject().updateView(itemToBeAdded);
      expect(subject().$el.find('.todo-view')).toBeDefined();
    });

    it('will be added to collection', function () {
      subject().addOne(itemToBeAdded);
      expect(ToDoCollection.length).toBe(expectedLength);
    });

    it('will be created', function () {
      expect(subject().createItem('Test')).toBeDefined();
>>>>>>> origin/17-display-items
    });
  });
});
