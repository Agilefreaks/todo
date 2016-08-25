define([
  'models/todo'
], function (ToDo) {
  var instance, subject;

  beforeEach(function () {
    instance = new ToDo();
    subject = function () {
      return instance;
    };
  });

  describe('Empty ToDo Item', function () {
    it('will be defined', function () {
      expect(subject).toBeDefined();
    });
  });

  describe('ToDo Item', function () {
    var secondSubject, secondInstance;
    beforeEach(function () {
      secondInstance = new ToDo({title:'Drink beer', completed:false});
      secondSubject = function () {
        return secondInstance;
      };
    });

    it('will not be equal to the second one', function () {
      expect(subject).not.toEqual(secondSubject);
    });

    it('property will equal to drinking beer', function () {
      expect(subject.title).toEqual(secondSubject.title);
    });
  });
});
