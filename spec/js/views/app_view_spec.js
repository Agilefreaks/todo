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

    it('will be added to collection', function () {
      subject().addOne(new ToDo('Test'));
      expect(ToDoCollection.length).toBe(expectedLength);
    });
  });
});
