define([
  'views/app_view',
  'collections/todos',
  'ejs'
], function (Index, ToDoCollection) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({el: $('<div>'), collection: new ToDoCollection()});
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

    it('to add new todos is defined', function () {
      subject();

      expect($.contains(instance.el, instance.addToDoView.el)).toBeTruthy();
    });

    it('renders add todos view', function () {
      var renderSpy = spyOn(instance.addToDoView, 'render').and.callThrough();

      subject();

      expect(renderSpy).toHaveBeenCalled();
    });

    it('that contains list is defined', function () {
      subject();
      expect(instance.toDosView).toBeDefined();
    });

    it('renders todos list view', function () {
      var renderSpy = spyOn(instance.toDosView, 'render').and.callThrough();

      subject();

      expect(renderSpy).toHaveBeenCalled();
    });
  });
});
