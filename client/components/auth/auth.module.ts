'use strict';

angular.module('colorblindApp.auth', [
  'colorblindApp.constants',
  'colorblindApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
