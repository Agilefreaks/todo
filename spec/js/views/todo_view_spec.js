define([
  'views/todo_view',
  'models/todo'
], function (Index, ToDo) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({model: new ToDo({title: 'Test', completed: false})});
    subject = function () {
      return instance;
    };
  });

  afterEach(function () {
    instance.$el.empty();
  });

  describe('Render', function () {
    var expectedLength = 0;

    beforeEach(function () {
      expectedLength = 1;
      subject = function () {
        instance.render();
      };
    });

    it('creates checkbox input', function () {
      subject();
      expect(instance.$('.toggle').length).toBe(expectedLength);
    });

    it('creates title element', function () {
      subject();
      expect(instance.$el.find('.title').length).toBe(expectedLength);
    });

    it('creates delete button', function () {
      subject();
      expect(instance.$el.find('.delete').length).toBe(expectedLength);
    });
  });
});
