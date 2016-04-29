define([
  'views/app_view',
  'ejs'
], function (Index) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({el: $('body')});
    subject = function () {
      return instance;
    };
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      };
    });

    it('index was rendered', function () {
      spyOn(instance, 'render').and.callThrough();

      subject();

      expect(instance.render).toHaveBeenCalled();
    });

    it('renders Todos', function () {
      spyOn(instance.todos, 'render').and.callThrough();

      subject();

      expect($.contains(instance.el, instance.todos.el)).toBe(true);
    });
  });
});
