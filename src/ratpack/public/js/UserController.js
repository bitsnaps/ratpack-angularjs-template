app.controller('UserController', function ($scope, $resource) {

  var User = $resource('/users');
  $scope.user = {
    username: 'admin',
    password: 'admin'
  }
  // Create a User
  $scope.createUser = function(){
    if ($scope.user.username != ''){
      var user = new User();
      user.username = $scope.user.username;
      user.password = $scope.user.password;
      user.$save();
      $scope.user = {
        username: '',
        password: ''
      }
    }
  }

});