angular.module("app")  
  .controller("exam24Controller", function($log, $scope, $window, $document, $interval, $location, $routeParams, $anchorScroll){ //interval이 서비스객체로 만들어줌
   $scope.openAlert = () => {
      $window.alert("알림 메시지");
    };

    $scope.findDom = () => {
      //$("#content").html("Hello, AngularJS"); //이건 앵귤러가 관리 x
      $document.find("#content").html("Hello, AngularJS"); //find는 jquery에서 제공
    };

    let timerId;
    $scope.startTime = () => {
      timerId = $interval(() => { //앵귤러범위에서 실행
        var now = new Date();
        $document.find("#content").html(now.toLocaleDateString() + " " + now.toLocaleTimeString());
      }, 1000);
    };

    $scope.endTime = () => {
      if(timerId){ //timerId가 있다면
        $interval.cancel(timerId);
      }
    };
    
    $scope.changeUrl1 = (pageNo) => {
      const path = `/exam24_builtin_service/boards?pageNo=${pageNo}#bottom`; //"/exam24_builtin_service/boards?pageNo="+pageNo;
      //#bottom 이 아이디를 가지고 잇는 태그쪽으로 이동 / boards/100? >> boards뒤에 100은 페이지(routeparams >>객체의 속성으로 만들어줌)
      $location.url(path);
    };

    $scope.changeUrl2 = (bno, pageNo) => {
      const path = `/exam24_builtin_service/boards/${bno}?pageNo=${pageNo}#bottom`; //"/exam24_builtin_service/boards?pageNo="+pageNo;
      //#bottom 이 아이디를 가지고 잇는 태그쪽으로 이동 / boards/100? >> boards뒤에 100은 페이지(routeparams >>객체의 속성으로 만들어줌)
      $location.url(path);
    };

    $scope.$on("$locationChangeSuccess", () => {
      console.log("$location.url() : ",$location.url());
      console.log("$location.path() : ",$location.path());
      console.log("$location.search() : ",$location.search());
      console.log("$location.hash() : ",$location.hash());
      console.log("$routeParams : ", $routeParams);
      const bno = $routeParams.bno; //페이지 이동시 param사용이 편함
      const pageNo = $routeParams.pageNo;
    });

    $scope.items = [];
    for(var i=0; i<50; i++){
      $scope.items.push("Item " + i);
    };

    $scope.show = (id) => {
      $anchorScroll(id);
    };

    $scope.handlePrintLog = () => {
      $log.error("error Message");
      $log.warning("warning Message");
      $log.info("info Message");
      $log.debug("debug Message");
    }
});

 