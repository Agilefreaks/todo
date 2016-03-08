define([
  'views/app_view',
  'ejs'
], function (Index) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({el: $('body')});
    subject = function () {
      return instance;
    }
  });

  describe('initial state', function(){
    beforeEach(function(){
      subject().render();
    })
    it('our list should be empty', function(){
      expect(subject().collection.length).toBe(0);
    });
  });

  describe('adding new item', function(){
    beforeEach(function(){
      subject().render();
    });

    it('for a valid, should add it', function(){
      subject().addItems('asfsa');
      expect(subject().collection.length).not.toBe(0);
    });

    it('for an invalid input, shouldn\'t add it', function(){
      subject().addItems('');
      expect(subject().collection.length).toBe(0);
    });

    it('for a string full of white spaces, shouldn\'t add it', function(){
      subject().addItems('     ');
      expect(subject().collection.length).toBe(0);
    });
  });

});
