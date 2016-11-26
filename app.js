(function(){
  'use strict';
  angular.module('assignmentApp',[])
  .controller('myController',function($scope){
    $scope.checkDishes=function(){
      var dishes = $scope.name;
      if($scope.name != null && $scope.name !="")
      {
        var dishesArray = dishes.split(',');
        console.log("dishesArray"+dishesArray.length);
        if(dishesArray.length >3)
        {
          $scope.message = "too much";
        }else{
          $scope.message = "enjoy";
        }

      }else {
        $scope.message="enter values";
        return;
      }
    }
  });

})();
