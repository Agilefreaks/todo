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


  describe('addTodo',function(){

    describe('with empty title',function()
    {
      it('will not add todo',function(){
        subject().$("#todo-title-textbox").val("");
        subject().addTodo();
        expect(subject().todoItemCollection.length).toEqual(0);
      });
    });

    describe('with some title', function(){
      it('will add todo item', function(){
        subject().$("#todo-title-textbox").val("test");
        subject().addTodo();
        expect(subject().todoItemCollection.length).toEqual(1);
      });
      it('will clear the input', function(){
        expect(subject().$("#todo-title-textbox").val()).toEqual("");
      });
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
});
