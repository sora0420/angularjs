angular.module("app") //app모듈을 가져옴
  .controller("exam11Controller", function($scope){ //function은 생성자
    $scope.content="";
    $scope.setContent = (content) => {
      $scope.content = content;
    }
  });
