angular.module("app") //app모듈을 가져옴
  .controller("exam08Controller", function($rootScope, $scope){ //function은 생성자
     //$scope.uid = "user1"; 여기서도 rootscope써도 되지만 app.js에서 run부분에서도 쓸수잇음
     $scope.login = (user) =>{
       if(user && user.uid && user.upassword){
         //로그인이 성공되었다고 가정
         $rootScope.uid = user.uid; //루트스코프에 uid가 없는데 이렇게 써서 새로 생김
         $rootScope.upassword = user.upassword;
         
       }
     }
  });