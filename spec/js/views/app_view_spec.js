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


  describe('addTodo', function(){
    beforeEach(function(){
      subject = function () {
        instance.addTodo();
      };
    });
    
    describe('with empty title', function(){
      it('will not add todo', function(){
        subject();
        expect(instance.todoItemCollection.length).toEqual(0);
      });
    });

    describe('with some title', function(){
      beforeEach(function(){
        instance.$("#todo-title-textbox").val("test");
      });
      
      it('will add todo item', function(){
        subject();
        expect(instance.todoItemCollection.length).toEqual(1);
      });

      it('will clear the input', function(){
        subject();
        expect(instance.$("#todo-title-textbox").val()).toEqual("");
      });

      it('adds the todo with that title', function(){
        subject();
        expect(instance.todoItemCollection.at(instance.todoItemCollection.length-1).get('title')).toEqual("test");
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
