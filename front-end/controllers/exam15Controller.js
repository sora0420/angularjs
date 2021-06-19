angular.module("app") //app모듈을 가져옴
  .controller("exam15Controller", function($rootScope, $scope){ //function은 생성자
    $scope.todos = [
      {action:"동영상 녹화(Office)", complete: false}, //할 일에 대한 객체 //목록을 만든다 하면 배열로 가져와야함/ 서버에서
      {action:"앵귤러JS 복습(Home)", complete: false}, //객체 3개
      {action:"알마인드(Home)", complete: false}, //repeat하면 3개 또 repeat하면 속성 반복해서 2개
      {action:"밥먹기(Office)", complete: false}
    ];

    $scope.viewFile = () => { //showList가 변화가 생기면(체크를하면) showList속성이 생김
      const fileName = $scope.showList? "list.html":"table.html";
      return fileName;
    }

    $scope.changeView = () => {
      $scope.showList = !$scope.showList; //반대값 /showList가 true면 false이런식
    }

    $scope.handleLoad = () => {
      console.log("AJAX 통신이 완료됨")
    }
  });

