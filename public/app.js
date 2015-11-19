/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
//var app:ng.IModule = angular.module("app", []);
//Wait for document to load, before bootstrapping angular app
var mainApplicationModuleName = "mean";
///Declare angular module
var mainApplicationModule = angular.module(mainApplicationModuleName, []);
angular.element(document).ready(function () {
    //Now manually bootstrap the app
    angular.bootstrap(document, [mainApplicationModuleName]);
});
/*
var app:ng.IModule = angular.module("app", []).controller("myController", ['$scope', function($scope) {

}]);
*/ 
//# sourceMappingURL=app.js.map