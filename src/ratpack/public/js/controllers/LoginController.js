app.controller('LoginController', function ($scope, $state, $location, AuthenticationService) {

  $scope.vm = {};
  var vm = $scope.vm;

  vm.error = '';
  vm.username = '';
  vm.password = '';
  vm.loading = false;

  // Login a User
  vm.login = function(){
    vm.loading = true;
    AuthenticationService.Login(vm.username, vm.password, function (result) {
    if (result === true) {
        $location.path('/');
    } else {
        vm.error = result; //'Username or password is incorrect';
        vm.loading = false;
    }
});
  };

  // Logout
  vm.logout = function(){
  };

});