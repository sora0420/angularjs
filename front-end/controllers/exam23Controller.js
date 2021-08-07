angular.module("app")  
  .controller("exam23Controller", function($scope, counterServiceByFactory, 
    counterServiceByService, 
    counterServiceByProvider) {//컨트롤러에서 서비스 사용 / 사용하려면 서비스 주입필요

    $scope.addCount = () => {
      counterServiceByFactory.addCount();
      counterServiceByService.addCount();
      counterServiceByProvider.addCount();
    };
    $scope.getCount1 = () => {
      return counterServiceByFactory.getCount();
    };

    $scope.getCount2 = () => {
      return counterServiceByService.getCount();
    };

    $scope.getCount3 = () => {
      return counterServiceByProvider.getCount();
    };
  })

 