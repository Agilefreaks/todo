define([
  'router',
  'views/app_view'
], function (Router, AppView) {
  var instance, subject;

  beforeEach(function () {
    instance = Router.initialize();
    subject = function () {
      return instance;
    };
  });

  describe('routes', function () {
    beforeEach(function () {
      subject = function () {
        return instance.routes;
      };
    });

    it('has a index route', function () {
      expect(subject()['*filter']).toEqual('index');
    });
  });

  describe('navigate to ', function () {
    beforeEach(function () {
      Backbone.history.start({silent: true, pushState: true});

      subject = function (filter) {
        instance.navigate(filter, true);
      };
    });

    afterEach(function () {
      Backbone.history.stop();
    });

    it('empty route call renders on the index view', function () {
      var renderSpy = spyOn(AppView.prototype, 'render').and.callThrough();

      subject('');

      expect(renderSpy).toHaveBeenCalled();
    });

    it('#done route call renders on the index view', function () {
      var renderSpy = spyOn(AppView.prototype, 'render').and.callThrough();

      subject('#done');

      expect(renderSpy).toHaveBeenCalled();
    });
  });
});
