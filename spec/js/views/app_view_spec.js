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

  describe('adding new todo', function(){
    beforeEach(function(){
      subject().render();
    })
    it('our todoList should be empty at first render', function(){
      expect(subject().todoCollection.length).toBe(0);
    });
  });

  describe('adding new todo', function(){
    beforeEach(function(){
      subject().render();
    });

    it('should add it', function(){
      subject().addItems('asfsa');
      expect(subject().todoCollection.length).not.toBe(0);
    });

    it("for empty todo it shouldn't add it", function(){
      subject().addItems('');
      expect(subject().todoCollection.length).toBe(0);
    });
  });
});
