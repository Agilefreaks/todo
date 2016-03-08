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

  describe('intial state', function(){
    it('will be empty', function(){
        subject().render();
        expect(subject().collection.length).toBe(0);
    })
  });
  describe('adding an items on click event', function(){
    var spy;
    beforeEach(function(){
      spy = spyOn(subject(),'addItems');
      subject().addItems('adga');
    });

    it('should call click event handler',function(){
      expect(spy).toHaveBeenCalled();
    });

  });

  describe('adding an items on key event enter', function(){
    var spy;
    beforeEach(function(){
     spy = spyOn(subject(),'keyAction');
     subject().keyAction('adga');
   });
   it('should call key event handler',function(){
      expect(spy).toHaveBeenCalled();
    });
  });
});
