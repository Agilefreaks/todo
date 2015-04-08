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

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      }
    });

    it('will render a text input', function () {
      subject();

      expect(instance.$('input[type="text"]').length).toEqual(1);
    });

    it('will render a button', function () {
      subject();
      expect(instance.$('input[type="submit"]').length).toEqual(1);
    });
  });

  describe('events', function () {
    beforeEach(function () {
      instance.render();
    });

    describe('click add button', function () {
      beforeEach(function () {
        subject = function () {
          instance.$('#newToDo').click();
        }
      });

      describe('when input has value', function () {
        beforeEach(function () {
          instance.$('input[type="text"]').val('nu');
        });

        it('adds item to collection', function () {
          subject();
          expect(instance.todos.length).toEqual(1);
        });

        it('sets title on the added todo', function () {
          subject();
          expect(instance.todos.first().get("title")).toEqual('nu');
        });
      });
    });
  });
});
