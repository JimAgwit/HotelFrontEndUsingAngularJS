var myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function ($scope, $http) {
  $scope.getData = function () {
    $http({
      method: "GET",
      url: "https://localhost:44342/api/Customer",
      params: { name: "name", age: "age" },
    }).then(
      function successCallback(response) {
        $scope.data = response.data;
      },
      function errorCallback(response) {
        console.log(response.statusText);
      }
    );
  };
});
