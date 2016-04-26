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
    it('will get rendered', function () {
      subject().render();
      expect(subject().$el.text()).toEqual(jasmine.stringMatching(/The current date is:/));
    });
  });

  describe('currentDate', function () {
    beforeEach(function () {
      subject = function () {
        return instance.currentDate();
      };
    });

    it('returns a date', function () {
      expect(subject() instanceof Date).toBe(true);
    });
  });

  describe('add', function () {

    var equalToZero = 0;
    var equalToOne = 1;

    beforeEach(function () {
      instance.render();
      subject = function () {
        return instance.add(new Event());
      };
    });

    it('expect to: return nothing if input is empty', function () {
      $('input[name="name"]').val('');

      expect(subject().length).toEqual(equalToZero);
    });

    it('expect to: add model', function () {
      $('input[name="name"]').val('add_value');

      expect(subject().length).toEqual(equalToOne);
    });

    it('expect to: add model', function () {
      $('input[name="name"]').val('test_name');

      expect(subject().first().get('name')).toEqual('test_name');
    });

  });
});
