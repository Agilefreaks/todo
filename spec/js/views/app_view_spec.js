define([
  'views/app_view',
  'jquery',
  'ejs'
], function (AppView, $) {
  describe('AppView', function () {
    var instance, $el, subject;

    beforeEach(function () {
      $el = $('<div></div>');
      instance = new AppView({el: $el});
      $('body').html($el);

      subject = function () {
        return instance;
      }
    });

    afterEach(function () {
      $el.remove();
    });

    describe('initialize', function () {
      it('will set todos ', function () {
        expect(instance.todos).toBeDefined();
      })
    });

    describe('render', function () {
      beforeEach(function () {
        subject = function () {
          instance.render();
        }
      });

      it('will render a input', function () {
        subject();

        expect(instance.$('input#inputTodoText').length).not.toBe(0);
      });

      it('will render a add button', function () {
        subject();

        expect(instance.$('input#btnSubmit').length).not.toBe(0);
      })
    });

    describe('form submit', function () {
      var e;

      beforeEach(function () {
        e = jQuery.Event('submit');
        instance.render();

        subject = function () {
          return instance.$('form').trigger(e);
        };
      });

      describe('when #inputTodoText has value', function () {
        beforeEach(function () {
          instance.$('#inputTodoText').val('42');
        });

        it('adds a model to the collection', function () {
          subject();

          expect(instance.todos.length).toBe(1);
        });

        it('sets the text on the model', function () {
          subject();

          expect(instance.todos.at(0).get('text')).toEqual('42');
        });

        it('clears input text', function () {
          subject();

          expect(instance.$('#inputTodoText').val()).toEqual('');
        });
      });

      describe('when #inputTodoText does not have value', function () {
        beforeEach(function () {
          instance.$('#inputTodoText').val('');
        });

        it('no model is added to collection', function () {
          subject();

          expect(instance.todos.length).toBe(0);
        });
      });

      it('prevent default form action', function () {
        subject();

        expect(e.isDefaultPrevented()).toBe(true);
      })
    });
  });
});
