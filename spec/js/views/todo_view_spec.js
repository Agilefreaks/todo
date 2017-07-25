define([
  'views/todo_view',
  'model/todo',
  'ejs'
], function (TodoView, Todo) {
  var todoView, subject, model;

  beforeAll(function () {
    model = new Todo({name: 'test', done: false});
    todoView = new TodoView({model: model});
  });

  afterEach(function () {
    todoView.$el.empty();
  });

  describe('render', function () {
    var expectedLength;

    beforeEach(function () {
      expectedLength = 1;
      subject = function () {
        todoView.render();
      };
    });

    it('will define todo_view', function () {
      subject();
      expect(todoView).toBeDefined();
    });

    it('will create checkbox', function () {
      subject();
      expect(todoView.$('#toggle').length).toBe(expectedLength);
    });

    it('will create name input', function () {
      subject();
      expect(todoView.$el.find('#name').length).toBe(expectedLength);
    });

    it('will create delete button', function () {
      subject();
      expect(todoView.$el.find('#delete').length).toBe(expectedLength);
    });
  });
});
