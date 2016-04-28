define([
  'views/todo_item_view',
  'models/todo',
  'ejs'
], function (ItemView, TodoModel) {
  var instance, subject;
  var Zero = 0;
  var One = 1;

  beforeEach(function () {
    instance = new ItemView({model: new TodoModel({name: 'test', done: 0})});
    subject = function () {
      return instance;
    };
  });

  describe('render', function () {
    beforeEach(function () {
      instance.render();
      subject = function () {
        return instance;
      };
    });

    it('todo will get rendered', function () {
      expect(subject().$el.find('.name_label').html()).toEqual('test');

      expect(subject().$el.find('.name_label').length).not.toEqual(Zero);
      expect(subject().$el.find('.checkbox').length).not.toEqual(Zero);
      expect(subject().$el.find('.remove_btn').length).not.toEqual(Zero);
    });
  });

  describe('checkTodo', function () {
    beforeEach(function () {
      instance.render();
      subject = function () {
        return instance.checkTodo();
      };
    });

    it('expect to: todo be mark as done', function () {
      subject();

      expect(instance.model.get('done')).toEqual(One);
    });
  });
});
