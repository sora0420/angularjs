angular.module("app")
  .controller("exam06Controller", function($scope){
    $scope.cities = ["서울", "뉴욕", "런던"];
    $scope.city = "서울";
    $scope.getCountry = () =>{
      switch($scope.city){
        case "서울":
          return "한국";
          break;
        case "뉴욕":
          return "미국";
          break;
        case "런던":
          return "영국";
          break;  
      }
    };
  });