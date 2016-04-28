define([
  'views/add_view',
  'collections/todo',
  'ejs'
], function (AddView, TodoCollection) {
  var instance, subject;
  var Zero = 0;
  var One = 1;

  beforeEach(function () {
    instance = new AddView({el: $('body'), collection: new TodoCollection()});
    subject = function () {
      return instance;
    };
  });

  describe('render', function () {
    it('form will get rendered', function () {
      subject().render();

      expect(subject().$el.find('form#add_form').length).not.toEqual(Zero);
    });
  });

  describe('add', function () {
    beforeEach(function () {
      instance.render();
      subject = function () {
        return instance.add(new Event());
      };
    });

    it('expect to: return nothing if input is empty', function () {
      $('input[name="name"]').val('');

      expect(subject().length).toEqual(Zero);
    });

    it('expect to: add model', function () {
      $('input[name="name"]').val('add_value');

      expect(subject().length).toEqual(One);
    });

    it('expect to: add model', function () {
      $('input[name="name"]').val('test_name');

      expect(subject().first().get('name')).toEqual('test_name');
    });

    it('expected to: clear the input after submit', function () {
      $('input[name="name"]').val('test_name');

      subject();

      expect($('input[name="name"]').val().length).toEqual(Zero);
    });
  });
});
