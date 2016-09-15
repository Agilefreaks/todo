define([
  'views/todo_view',
  'models/todo'
], function (Index, ToDo) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({el: $('todo-list'), model: new ToDo({title: 'Test', completed: false})});
    subject = function () {
      return instance;
    };
  });

  afterEach(function () {
    subject().$el.empty();
  });

  describe('Checkbox input', function () {
    it('will be defined', function () {
      subject().render();
      expect(subject().$('input#checkbox')).toBeDefined();
    });
  });

  describe('Label type', function () {
    it('will be defined', function () {
      subject().render();
      expect(subject().$el.find('input#label')).toBeDefined();
    });
  });
});
