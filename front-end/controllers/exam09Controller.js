angular.module("app") //app모듈을 가져옴
  .controller("exam09Controller", function($rootScope, $scope){ //function은 생성자
     //$scope.uid = "user1"; 여기서도 rootscope써도 되지만 app.js에서 run부분에서도 쓸수잇음
     $scope.login = (user) =>{
       if(user && user.uid && user.upassword){
         $rootScope.$broadcast("loginSuccess", {uid:user.uid}); //방송 메세지 (순서1)
         // $rootScope.$broadcast("loginSuccess", {uid:user.uid, test:"test"}); 이러면 app.js에서 test값 받기 가능
       }
     }

     $scope.$on("loginSuccess", (event, message) => {
      console.log("exam09Controller가 loginSuccess 방송 수신함");
      console.log(message);
    }); //로그인석세스 방송 수신을 원함 / 어떤 메세지 //

      $scope.logout = () => {
        $rootScope.$broadcast("logout");
      }
  });