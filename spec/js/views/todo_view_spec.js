define([
  'views/todo_view',
  'models/todo'
], function (Index, ToDo) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({model: new ToDo({title: 'Test', completed: false}), el: $('<div>')});
    subject = function () {
      return instance;
    };
  });

  afterEach(function () {
    instance.$el.empty();
  });

  describe('Render', function () {
    var expectedLength = 1;

    beforeEach(function () {
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

  describe('Check item', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
        instance.toggleCompleteStatus();
      };
    });

    it('executes call of function', function () {
      var spy = spyOn(instance, 'toggleCompleteStatus').and.callThrough();

      subject();

      expect(spy).toHaveBeenCalled();
    });

    it('model complete status is modified to true', function () {
      subject();

      expect(instance.model.get('completed')).toBeTruthy();
    });

    it('changes style of title', function () {
      subject();

      expect(instance.$('.title').hasClass('completed')).toBeTruthy();
    });
  });
});
