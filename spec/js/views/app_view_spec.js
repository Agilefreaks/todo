define([
  'views/app_view',
  'models/todo',
  'collections/todos',
  'ejs'
], function (Index, ToDo, ToDoCollection) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({el: $('body'), ToDoCollection: ToDoCollection});
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
    });
  });
});
