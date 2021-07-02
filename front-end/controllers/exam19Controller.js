angular.module("app") //app모듈을 가져옴
  .controller("exam19Controller", function($scope){ //function은 생성자
    $scope.imageName = "photo1.jpg";
    $scope.handleBtnClick = (event) => { //event안넘겨주면 {}안에서 event 못씀
      if($scope.imageName === "photo1.jpg"){
        $scope.imageName = "photo2.jpg";
      } else{
        $scope.imageName = "photo1.jpg";
      }
    };

    $scope.todos = [
      {action:"동영상 녹화(Office)", complete: false}, //할 일에 대한 객체 //목록을 만든다 하면 배열로 가져와야함/ 서버에서
      {action:"앵귤러JS 복습(Home)", complete: false}, //객체 4개
      {action:"알마인드(Home)", complete: false}, //repeat하면 4개 또 repeat하면 속성 반복해서 2개
      {action:"밥먹기(Office)", complete: false}
    ];

    $scope.handleMouseEvent = (event) => {
      console.log("Event Type : ", event.type);
      console.log("Event Target : ", event.target);
      if(event.type === "mouseenter"){ //이부분은 jquery
        $(event.target).parent("tr").css("background-color", "#e9ecef"); //td객체 중에 부모 tr을 찾아라
      }else{
        $(event.target).parent("tr").css("background-color", "#ffffff"); //td객체 중에 부모 tr을 찾아라
      
      }
    }
  });

