angular.module("app")
//서비스 선언 방법1 --------------------------------------------
  .factory("counterServiceByFactory", function() {
    //숨김 데이터, 바깥쪽에서 접근 못함
    let count =0; 

    //서비스 객체를 리턴
    return {
      addCount: function() {
        count++;
      },
      getCount: function() {
        return count;
      }
    };
  }) 
 
 //서비스 선언 방법2 --------------------------------------------
  .service("counterServiceByService", function() {
    this.count = 0;
    this.addCount = () => this.count++; // { this.count++ };
    this.getCount = () => this.count; //{ return this.count};
  
  })

//서비스 선언 방법3 --------------------------------------------
  .provider("counterServiceByProvider", function(){
    //숨김 데이터
    let count = 0;
    //프로바이더 객체 리턴
    return {
      //서비스 객체의 초기화 함수 / 프로바이터 객체에 속한 메소드
      setCount: function(value){ //app.js에서 초기화
        count = value;
      },

      $get: function(){ //프로바이더 객체안에 $get 이게 서비스객체 리턴
      //서비스 객체 리턴
        return {
          addCount: function() {
            count++;
          },
          getCount: function(){
            return count;
          }
        };  
      }
    };
  });