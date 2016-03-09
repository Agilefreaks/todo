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

  describe('adding new item', function(){
    beforeEach(function(){
      subject().render();
    })
    it('our list should be empty', function(){
      expect(subject().myCollection.length).toBe(0);
    });
  });

  describe('adding new item', function(){
    beforeEach(function(){
      subject().render();
    });

    it('for a valid, should add it', function(){
      subject().addItems('asfsa');
      expect(subject().myCollection.length).not.toBe(0);
    });

    it('for an invalid input, shouldn\'t add it', function(){
      subject().addItems('');
      expect(subject().myCollection.length).toBe(0);
    });

    it('for a string full of white spaces, shouldn\'t add it', function(){
      subject().addItems('     ');
      expect(subject().myCollection.length).toBe(0);
    });
  });

  describe('on click event',function(){
    var spy;
    beforeEach(function(){
      subject().render();
      spy = spyOn(subject(), 'onAddButtonClick');
    });

    it('for a valid input should trigger onAddButtonClick', function(){
      $('#input').val('adfa');
      $('#addButton').trigger('click');
      expect('click').toHaveBeenTriggeredOn('addButton');
    });
  });
});
