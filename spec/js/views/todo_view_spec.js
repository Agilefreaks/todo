define([
  'views/todo_view',
  'models/todo'
], function (Index, ToDo) {
  var instance, model, subject;

  beforeEach(function () {
    model = new ToDo({title: 'Test', completed: false});
    instance = new Index({model: model, el: $('<div>')});
    subject = function () {
      return instance;
    };
  });

  afterEach(function () {
    instance.$el.empty();
  });

  describe('render', function () {
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

  describe('toggleCompleteStatus', function () {
    beforeEach(function () {
      instance.render();
      subject = function () {
        instance.toggleCompleteStatus();
      };
    });

    it('modifies complete status of the model to true', function () {
      subject();

      expect(instance.model.get('completed')).toBeTruthy();
    });

    it('changes style of title', function () {
      subject();

      expect(instance.$('.title').hasClass('completed')).toBeTruthy();
    });
  });

  describe('deleteItem', function () {
    beforeEach(function () {
      instance.render();
      subject = function () {
        instance.deleteItem();
      };
    });

    it('executes destruction of model', function () {
      var destroySpy = spyOn(model, 'destroy');

      subject();

      expect(destroySpy).toHaveBeenCalled();
    });

    it('removes view', function () {
      var myDiv = $('<div>').append(instance.$el);

      subject();

      expect($.contains(myDiv.get(0), instance.el)).toBeFalsy();
    })
  });
});
