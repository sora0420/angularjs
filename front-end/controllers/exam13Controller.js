angular.module("app") //app모듈을 가져옴
  .controller("exam13Controller", function($rootScope, $scope){ //function은 생성자
    $scope.todos = [
      {action:"동영상 녹화(Office)", complete: false}, //할 일에 대한 객체 //목록을 만든다 하면 배열로 가져와야함/ 서버에서
      {action:"앵귤러JS 복습(Home)", complete: false}, //객체 3개
      {action:"알마인드(Home)", complete: false}
    ];

    $scope.job="개발자";
  });

