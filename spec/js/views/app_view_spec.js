define([
  'views/app_view',
  'ejs',
  'backbone'
], function (Index) {
  var instance, subject, Backbone;

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

  describe('Add', function () {
    beforeEach(function () {
      instance.render();

      subject = function () {
        return instance.Add(new Event());
      };
    });


    it('expect to: return nothing if input is empty', function () {
      expect(subject().length).toEqual(0);
    });

    it('expect to: add model', function () {
      $('input[name="name"]').val("test_name");

      expect(subject().length).toEqual(1);
    });

    it('expect to: add model', function () {
       var name = subject().at(0).get('name');

      expect(name).toEqual("test_name");
    });


  });
});
