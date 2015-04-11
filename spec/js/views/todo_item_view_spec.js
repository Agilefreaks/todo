define([
  'views/todo_item_view',
  'model/todo',
  'ejs'
], function (ToDoItemView, ToDo) {
  var instance, subject, model;

  beforeEach(function () {
    model = new ToDo({title: 'nu'});
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
});
