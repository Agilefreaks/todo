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
      expect(subject()['(?:params)']).toEqual('index');
    });

    it('has a all todos route', function () {
      expect(subject()['all']).toEqual('index');
    });

    it('has a done todos route', function () {
      expect(subject()['done']).toEqual('index');
    });

    it('has a not done todos route', function () {
      expect(subject()['notdone']).toEqual('index');
    });
  });

  describe('navigate to empty route', function () {
    beforeEach(function () {
      Backbone.history.start({silent: true, pushState: true});
      subject = function () {
        instance.navigate('', true);
      };
    });

    it('calls render on the index view', function () {
      var renderSpy = spyOn(AppView.prototype, 'render').and.callThrough();

      subject();

      expect(renderSpy).toHaveBeenCalled();
    });
  });
});
