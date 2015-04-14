define([
  'views/todo_item_view',
  'model/todo',
  'collection/todos',
  'ejs'
], function (ToDoItemView, ToDo, ToDos) {
  var instance, subject, model, collection;

  beforeEach(function () {
    model = new ToDo({title: 'nu'});
    collection = new ToDos();
    collection.add(model);
    instance = new ToDoItemView({model: model});
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

    it('will render a li', function () {
      subject();
      expect(instance.$el.prop("tagName")).toEqual("LI");
    });

    it('will render a checkbox', function () {
      subject();
      expect(instance.$('input[type="checkbox"]').length).toEqual(1);
    });

    it('will render a label', function () {
      subject();
      expect(instance.$('label').length).toEqual(1);
    });

    it('wil set the label with the title of the model', function () {
      subject();
      expect(instance.$('label').text()).toEqual('nu');
    });

    it('will render a button', function () {
      subject();
      expect(instance.$('input[type="button"]').length).toEqual(1);
    });
  });

  describe('events', function () {
    beforeEach(function () {
      instance.render();
    });

    describe('click delete button', function () {
      beforeEach(function () {
        subject = function () {
          instance.$('#btnDelete').click();
        }
      });

      it('will remove the model from the collection', function () {
        subject();
        expect(collection.length).toEqual(0);
      });

      describe('view has parent', function () {
        var $parent;

        beforeEach(function () {
          $parent = $('<div></div>');
          $parent.html(instance.$el);
        });

        it('will remove the rendered view', function () {
          subject();
          expect($.contains($parent.get(0), instance.el)).toBe(false);
        })
      });
    });
  });
});
