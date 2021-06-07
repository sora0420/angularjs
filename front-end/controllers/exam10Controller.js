angular.module("app") //app모듈을 가져옴
  .controller("exam10Controller", function($rootScope, $scope){ //function은 생성자
     $scope.btnDisabled = true;

    //  //하나의 속성값을 감시할 경우
    //  $scope.$watch("user.password1", (newPassword1) => {
    //   console.log("watch1");
    //   console.log("password1 변경값:", newPassword1); //이런식으로 가능// 밑에처럼도 가능
    //   if($scope.user && newPassword1 && $scope.user.password2){
    //     if(newPassword1 === $scope.user.password2){
    //       $scope.btnDisabled = false;
    //     }else{
    //       $scope.btnDisabled = true;
    //     }
    //   } else{
    //     $scope.btnDisabled = true;
    //   }

    //  }); //password1만 감시

    //  $scope.$watch("user.password2", (newPassword2) => { //user의 password2를 감시함 / user.password2의 값이 들어옴
    //   console.log("watch2");      
    //   console.log("password2 변경값:", newPassword2);
    //   if($scope.user && $scope.user.password1 && $scope.user.password2){
    //     console.log($scope.user.password1 === $scope.user.password2);
          
    //     if($scope.user.password1 === $scope.user.password2){
    //       $scope.btnDisabled = false;
    //     }else{
    //       $scope.btnDisabled = true;
    //     }
    //   } else{
    //     $scope.btnDisabled = true;
    //   }

    // }); //password2만 감시
    
    //객체의 모든 속성값들을 감시
    $scope.$watchCollection("user", function(newUser){ //user감시 / uesr의 값이 newUser
      console.log("user 변경값:", newUser);
    if(newUser && newUser.password1 && newUser.password2){ //newUser = $scope.user
      if(newUser.password1 === newUser.password2){
        $scope.btnDisabled = false;
      }else{
        $scope.btnDisabled = true;
      }
    } else{
        $scope.btnDisabled = true;
      }
    });
  });

      // $scope.$watchCollection("user", function(newUser){
    //   console.log("user 변경값:", newUser);
    // if($scope.user && $scope.user.password1 && $scope.user.password2){ //newUser = $scope.user
    //   if($scope.user.password1 === $scope.user.password2){
    //     $scope.btnDisabled = false;
    //   }else{
    //     $scope.btnDisabled = true;
    //   }
    //   }
    // });

     //ex) user.userid / user.userpw
     //user >>객체 // user.userid >>속성
     //객체를 감시 / 여러 속성 중 속성하나라도 바뀌면 실행 >> watch colletcion
     //하나의 값만 주시해서 변경되는걸 확인하고 어떤걸 실행하겟다 >> watch

     //$scope 에 접근해서 스코프 함수 호출하기
    //angular.element( angularRegion scope().$apply(“ 스코프의 fn()”)
    //angularRegion scope() >>스코프에 접근하겠다 >> apply 적용하겟다