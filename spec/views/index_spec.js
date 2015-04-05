define(['views/index'], function(Index) {
  var instance, subject;

  beforeEach(function() {
    instance = new Index();
    subject = function() {
      return instance;
    }
  });

  describe('currentDate', function() {
    beforeEach(function() {
      subject = function() {
        return instance.currentDate();
      }
    });

    it('returns a date', function() {
      expect(subject() instanceof Date).toBe(true);
    });
  });
});