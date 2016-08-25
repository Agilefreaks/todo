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

  describe('Text input', function () {
    it('will be defined', function () {
      subject().render();
      expect(subject().$el.find('input#text')).toBeDefined();
    });
  });

  describe('Button type', function () {
    it('will be defined', function () {
      subject().render();
      expect(subject().$el.find('button#button')).toBeDefined();
    });
  });
});
