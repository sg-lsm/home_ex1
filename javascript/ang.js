(function(){
    var box9_number1=150, box9_number2=167;
    var box9_number3=75,  box9_number4=155;
    var at4_count1=0;
    var at4_count2=0;
    
    var app=angular.module("port",[]);
    app.controller
    ("Port_Folio",["$scope", function($scope)   {
        $scope.box9_subject1 = "아메리카노";
        $scope.box9_subject2 = "바닐라라떼";
        $scope.box9_subject3 = "토피넛라떼";
        $scope.box9_subject4 = "오늘의커피";
//        아티클-4에 초기값 넣기
        $scope.at14_result1_value=at4_count1;
        $scope.at14_result2_value=at4_count2;
//        백분율 구하기(box9_value1)
        $scope.box9_value1 = (box9_number1 / 200) * 100;
        $scope.box9_value2 = (box9_number2 / 200) * 100;
        $scope.box9_value3 = (box9_number3 / 200) * 100;
        $scope.box9_value4 = (box9_number4 / 200) * 100;
//        HTML View 화면에 데이터 표시하기 (box9_display1) 
        $scope.box9_display1 = box9_number1;
        $scope.box9_display2 = box9_number2;
        $scope.box9_display3 = box9_number3;
        $scope.box9_display4 = box9_number4;
//        환율 계산 단위
        $scope.box10_pos1 = 1114.30;
        $scope.box10_pos2 = 1072.15;
        $scope.box10_pos3 = 169.56;
        $scope.box10_pos4 = 1319.85;
        $scope.at2_box10_value = 1000;
        $scope.event=[
                    '진행중인 이벤트 안내 (ng-repeat)',
                    '1. 코로나로 인한 비대면 수업입니다.',
                    '2. 화상 수업을 진행합니다.',
                    '3. 수업은 실무 위주로 바로 들어갑니다.',
                    '4. 프론트 개발 관련 프로그램 입니다.'
                ];
        $scope.pum = {
            "name":"커피", "model":"아메리카노",
            "price":5000, "color": "black",
            "img":"img/good22.jpg"
        }
        $scope.desert = [
            { "fruit": "사과", "price": 100 },
            { "fruit": "수박", "price": 200 },
            { "fruit": "딸기", "price": 300 },
            { "fruit": "망고", "price": 400 },
        ]
        
        $scope.kum=69000;
        $scope.bae=8500;
        $scope.se=$scope.kum*0.1;
        
        $scope.at2_box12 = function() {
            alert("12 ok");
        }
        
        $scope.at2_box14_1 = function() {
            $scope.at2_box14_show1 = !$scope.at2_box14_show1;
        }
        
        $scope.at4_add1 = function() {
            at4_count1++;            
            $scope.at14_result1_value=at4_count1;
        }
        $scope.at4_add2 = function() {
            at4_count2++;            
            $scope.at14_result2_value=at4_count2;
        }
        $scope.at4_sub1 = function() {
            at4_count1--;
            $scope.at14_result1_value=at4_count1;
        }
        $scope.at4_sub2 = function() {
            at4_count2--;
            $scope.at14_result2_value=at4_count2;
        }
        
        $scope.at4_jumun = function() {            
            alert("주문 되었습니다.");
        }
        
        $scope.job_group = ["stu","study","student"];
        
        
    }])
    
    app.directive("view", function(){
        return{            
            template: "<div>문장-1</div><ul><li>abc</li><li>123</ul>"
        }
    })
    
    
})();

$(function(){
    $(".at2_box14_jquery").on("click",function(){
        alert("at2_box14_func가 호출")
    })
})










