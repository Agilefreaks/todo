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

  describe('ToDoView', function () {
    describe('when creating new TODO', function () {
      it('should update the collection', function () {
        var one = 1;

        subject().createNewToDo();
        expect(subject().getTodoCollection().length).toBe(one);
      });
    });
  });
});
