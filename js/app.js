angular.module('John', ['ui.router'])

  .config(MainRouter);

  function MainRouter ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "index.html"
      })
      .state('aboutme', {
        url: "/aboutme",
        templateUrl: "aboutme.html"
      })
      .state('projects', {
        url: "/projects",
        templateUrl: "projects.html"
      })
      .state('contacts', {
        url: "/contacts",
        templateUrl: "contacts.html"
      });
      $urlRouterProvider.otherwise("/");
  }

