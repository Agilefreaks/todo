define([
  'views/new_todo_view',
  'collections/todos'
], function (NewTodo) {
  var instance, subject, collection;

  beforeEach(function () {

    instance = new NewTodo();
    subject = function () {
      return instance;
    };
    collection = subject().collection;
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      }
    });

    it ('render text input', function () {
      subject();

      expect(instance.$('input[type="text"]').length).toEqual(1);
    });

    it ('render button input', function () {
      subject();

      expect(instance.$('input[type="submit"]').length).toEqual(1);
    });
  });

  describe('click on submit button', function () {
    beforeEach(function () {
      instance.render();

      subject = function () {
        instance.$('input#submit').click();
      }
    });

    describe('when text input has value', function () {
      beforeEach(function () {
        instance.$title().val('a todo');
      });

      it('will add a new item to the todo collection', function () {
        subject();

        expect(collection.length).toBe(1)
      });

      it('will clear the title input', function () {
        subject();

        expect(instance.$title().val()).toBe('');
      });
    });

    describe('when text input has empty value', function () {
      beforeEach(function () {
        instance.$title().val('  ')
      });

      it('will not add a empty item', function () {
        subject();

        expect(collection.length).toBe(0);
      });
    });
  });
});
