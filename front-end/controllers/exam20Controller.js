angular.module("app") //app모듈을 가져옴
  .controller("exam20Controller", function($scope, $timeout){ //function은 생성자
    $scope.pageUrl = "/#!/exam19_event_directive";
    $scope.imgUrl = "resources/img/photo7.jpg"; 
    
    // $timeout(() => {
    //   $scope.imgUrl = "resources/img/photo5.jpg";  
    // }, 5000) //5초 후 실행

  });

