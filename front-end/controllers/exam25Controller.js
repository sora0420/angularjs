angular.module("app")
  .controller("exam25Controller", function($scope, exam25Service, $rootScope){
    $scope.$on("$routeChangeSuccess", () => {
      $scope.getList(1);
    });

    $scope.view = "list";
    $scope.getView = () => {
      switch($scope.view){
        case "list": return "views/exam25_http_products/list.html";
        case "create": return "views/exam25_http_products/create.html";
        case "read": return "views/exam25_http_products/read.html";
        case "update": return "views/exam25_http_products/update.html";
      }
    };

    $scope.createProductForm = () => {
      $scope.product = null;
      $scope.view = "create";
    };

    $scope.getList = (pageNo) => {
      exam25Service.list(pageNo)
        .then((response) => {
          $scope.pager = response.data.pager;
          $scope.products = response.data.products;
          $scope.pageRange = [];
          for(var i=$scope.pager.startPageNo; i<=$scope.pager.endPageNo; i++){
            $scope.pageRange.push(i);
          }
          $scope.view = "list";
        });
    };

    $scope.read = (bno) => {
      exam25Service.read(bno)
        .then((response) => {
          $scope.product = response.data;
          $scope.view = "read";
        });
    };

    $scope.battachUrl = (bno) => {
      return exam25Service.battachUrl(bno);
    };

    $scope.createProduct = (product) => {
      if(product && product.name && product.description && product.category && product.price){
        var formData = new FormData(); // multipart를 만듦
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("category", product.category);
        formData.append("price", product.price);
        exam25Service.create(formData)
          .then((response) => {
            $scope.getList(1);
            $scope.view = "list";
          });
          //.catch((response) => { //error발생할 경우 });
      }
    };

    $scope.cancel = () => {
      $scope.getList($scope.pager.pageNo);
      $scope.view = "list";
    };


    $scope.updateProductForm = () => {
      $scope.view = "update";
    };

    $scope.updateProduct = (product) => {
      if(product.name && product.description && product.category && product.price){
        var formData = new FormData();
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("category", product.category);
        formData.append("price", product.price);
        exam25Service.update(formData)
          .then((response) => {
            $scope.read(product.pid);
            $scope.view = "read";
          });
       }
    };


    $scope.deleteProduct = (pid) => {
      exam25Service.delete(pid)
        .then((response) => {
          $scope.getList(1);
          $scope.view = "list";
        });
    };
  });