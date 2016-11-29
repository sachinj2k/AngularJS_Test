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
          $scope.message = "Too Much";
        }else{
          $scope.message = "Enjoy";
        }

      }else {
        $scope.message="Please Enter dish values";
        return;
      }
    }
  });

})();
