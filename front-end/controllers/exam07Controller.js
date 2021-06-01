angular.module("app") //app모듈을 가져옴
  .controller("exam07Controller", function($scope){ //function은 생성자
      $scope.todos = [
        {action:"동영상 녹화(Office)", complete: false}, //할 일에 대한 객체 //목록을 만든다 하면 배열로 가져와야함/ 서버에서
        {action:"앵귤러JS 복습(Home)", complete: false}, //객체 3개
        {action:"알마인드(Home)", complete: false}
      ];

      $scope.newTodo = {
        action: "할일",
        location: "Home"
      }
      //$scope.newTodo 이렇게 없어도 자동으로 만들어 냄 / 사용자가 입력한 내용을 action에 저장함

      $scope.addNewItem1 = (newTodo) =>{ //newtodo가 들어옴
        if(newTodo && newTodo.action && newTodo.location){
          $scope.todos.push({
            action: newTodo.action + "(" + newTodo.location + ")",
            complete: false
          }); //배열은 push
          newTodo.action = "";
          newTodo.location ="";
        } else{
          console.log("올바르게 입력되지 않았음");
        }
      };

      $scope.addNewItem2 = () =>{ //매개값 안받고 쓰기 / scope에 자동적으로 만들어지니까(저장되니까) 넣어주면 됨 
        if($scope.newTodo && $scope.newTodo.action && $scope.newTodo.location){
          $scope.todos.push({
            action: $scope.newTodo.action + "(" + $scope.newTodo.location + ")",
            complete: false
          }); //배열은 push
          $scope.newTodo.action = "";
          $scope.newTodo.location ="";
        } else{
          console.log("올바르게 입력되지 않았음");
        }
      };
  });