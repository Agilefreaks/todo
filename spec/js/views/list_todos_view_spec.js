define([
  'views/list_todos_view',
  'models/todo',
  'collections/todo',
  'ejs'
], function (ItemView, TodoModel, TodoCollection) {
  describe('list_todos_view', function () {
    var instance, subject, collection;

    beforeEach(function () {
      collection = new TodoCollection();
      instance = new ItemView({collection: collection});
      subject = function () {
        return instance;
      };
    });

    describe('Event', function () {
      it('add new item when on collection update', function () {
        spyOn(instance, 'getCurrentFilter').and.returnValue('all');
        instance.getCurrentFilter();

        collection.push(new TodoModel({name: 'test', done: false, removed: false}));

        expect(instance.$el.find('.item').length).toEqual(1);
      });
    });

    describe('renderItem', function () {
      beforeEach(function () {
        instance.render();
        subject = function () {
          instance.renderItem(new TodoModel({name: 'test', done: 0}));
        };
      });

      it('expect to: render new item', function () {
        spyOn(instance, 'getCurrentFilter').and.returnValue('all');

        instance.getCurrentFilter();
        subject();

        expect(instance.$el.find('.item').length).toEqual(1);
      });
    });
  });
});
