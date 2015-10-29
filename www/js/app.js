angular.module('conferenceApp', ['ionic', 'conference'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html'
            }
        }
    })

    .state('app.participants', {
        url: '/participants',
        views: {
            'menuContent': {
                templateUrl: 'templates/participants.html',
                controller: 'participantsCtrl'
            }
        }
    })
    .state('app.calendar', {
        url: '/calendar',
        views: {
            'menuContent': {
                templateUrl: 'templates/calendar.html',
                controller: 'participantsCtrl'
            }
        }
    })

    .state('app.information', {
        url: '/information',
        views: {
            'menuContent': {
                templateUrl: 'templates/information.html',
            }
        }
    });

    $urlRouterProvider.otherwise('/app/about');
});
