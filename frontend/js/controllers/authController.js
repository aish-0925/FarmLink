app.controller('authController', function($scope, authService) {
  $scope.isRegister = false;
  $scope.user = {};

  $scope.register = function() {
    authService.register($scope.user).then(res => {
      alert('Registration successful! Please login.');
      $scope.isRegister = false;
      $scope.user = {};
    }).catch(err => {
      alert(err.data.message || 'Registration failed!');
    });
  };

  $scope.login = function() {
    authService.login($scope.user).then(res => {
      alert('Login successful!');
      localStorage.setItem('token', res.data.token);
      if (res.data.role === 'farmer') {
        window.location.href = 'dashboard/farmer-dashboard.html';
      } else {
        window.location.href = 'dashboard/chef-dashboard.html';
      }
    }).catch(err => {
      alert(err.data.message || 'Login failed!');
    });
  };
});
