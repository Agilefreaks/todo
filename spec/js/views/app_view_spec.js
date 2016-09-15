define([
  'views/app_view',
  'collections/todos',
  'ejs'
], function (Index, ToDoCollection) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({el: $('body'), collection: new ToDoCollection()});
    subject = function () {
      return instance;
    };
  });

  afterEach(function () {
    //instance.$el.empty();
  });

  describe('View object ', function () {
    beforeEach(function () {
      subject = function () {
        return instance.addToDoView;
      };
    });

    it('to add new todos is defined', function () {
      expect(subject()).toBeDefined();
    });
  });

  describe('View object ', function () {
    beforeEach(function () {
      subject = function () {
        return instance.toDosView;
      };
    });

    it('that contains list is defined', function () {
      expect(subject()).toBeDefined();
    });
  });
});
