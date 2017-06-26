var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http,$window) {
    
		// $http({
  //           method:"POST",
  //           url:'http://localhost:8012/uttejh/excite/some.php',
  //           headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  //           //data:{flat:$scope.flat},
  //         }).success(function(result){
  //           //$scope.list = result;
  //           //$rootScope.showloader=false;
  //           //$scope.vis=result;
  //           //$rootScope.badge=result.length;
  //           console.log(result);
            
  //         });



    $scope.flat=1;
    $http({
            method:"POST",
            url:'http://localhost:8012/uttejh/excite/visitorshow.php',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            dataType: 'jsonp',
            data:{flat:$scope.flat},
          }).success(function(result){
            //$scope.list = result;
            //$rootScope.showloader=false;
            $scope.vis=result;
            //$rootScope.badge=result.length;
            console.log(result);
            
          });
          //$scope.otpshow=true;
    $scope.genotp = function(mobile,$index){
    	console.log(mobile);
    	$http({
            method:"POST",
            url:'http://localhost:8012/uttejh/excite/genotp.php',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data:{mobile:mobile},
        }).success(function(result){
           
            console.log(result);
            
          });
    }
    $scope.otp="";
    $scope.val=function(mobile,otp){
    	$http({
            method:"POST",
            url:'http://localhost:8012/uttejh/excite/otpval.php',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data:{mobile:mobile,otp:otp},
        }).success(function(result){
           	//alert(result);
           	$window.alert(result);
            //console.log(result);
            $window.location.reload();
            
          });
    }

    $scope.nvdel=function(type){
    	$http({
            method:"POST",
            url:'http://localhost:8012/uttejh/excite/nvdel.php',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data:{type:type},
        }).success(function(result){
           	//alert(result);
           	$window.alert(result);
           	$window.location.reload();
            //console.log(result);
            
          });
    }
});


// app.all('*', function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
//      // intercept OPTIONS method
//     if ('OPTIONS' == req.method) {
//       res.send(200);
//     }
//     else {
//       next();
//     }
// });