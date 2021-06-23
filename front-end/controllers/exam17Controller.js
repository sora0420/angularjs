angular.module("app") //app모듈을 가져옴
  .controller("exam17Controller", function($scope){ //function은 생성자
    $scope.todos = [
      {action:"동영상 녹화(Office)", complete: true}, //할 일에 대한 객체 //목록을 만든다 하면 배열로 가져와야함/ 서버에서
      {action:"앵귤러JS 복습(Home)", complete: false}, //객체 4개
      {action:"알마인드(Home)", complete: false}, //repeat하면 4개 또 repeat하면 속성 반복해서 2개
      {action:"밥먹기(Office)", complete: false}
    ];
  });

