angular.module("app") //app모듈을 가져옴
  .controller("exam21Controller", function($scope){ //function은 생성자
    $scope.user = {
      uid: "",
      uemail: "",
      comment: "",
      public: "미공개"
    };

    $scope.cities = ["서울", "대전", "제주"];
    $scope.jobs=[
      {id:1, name: "개발자"},
      {id:2, name: "디자이너"},
      {id:3, name: "프로젝트 매니저"}      
    ];
    $scope.addUser = (user) => { //매개변수로 user 가능
      //$scope.user === user 같은객체임
      console.log(user);
    }
  });

