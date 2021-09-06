angular.module("app")
  .factory("exam25Service", function($http){
    //변수 선언
    const BASE_URL = "http://localhost:8080/products";
    //서비스 객체 리턴
    return {
      list: function(pageNo=1) {  
        const promise =  $http.get(BASE_URL, {params:{pageNo}}); //get방식에//sts에 @GetMapping("") public Map<String, Object> list 여기로 접근
        return promise; //promise는 비동기 처리 //위에 데이터 가져올 때 시간이 걸릴수 도 있어서 promise
        // =>> return $http.get(BASE_URL, {params:{pageNo}});
      },
      read: function(pid){
        const promise = $http.get(BASE_URL + "/" + pid);
        return promise;
      },
      battachUrl: function(pid){
        return BASE_URL + "/battach/" + pid;
      },
      create: function(formData){
        const promise = $http.post(BASE_URL, formData, {headers:{"Content-Type":undefined}});
        //{headers:{"Content-Type":undefined}} >>원래 default 값을 지우고 본문에 있는 multipart 타입을 넣음
        return promise;
      },
      update: function(formData) {
        const promise = $http.put(BASE_URL, formData, {headers:{"Content-Type": undefined}});
        return promise;
      },
      delete: function(pid){
        const promise = $http.delete(BASE_URL + "/" + pid);
        return promise;
      }
    }
  });