var pos=0, i, w, at2_box7_no=1,str="";
var menuA={
	"ju_menuA":["","회사소개","주문예약","견적보기","상품소개","고객센터",
						  "도움말" ],
    "at1_menuA1":["","주니어자전거-1","전기자전거-2","키즈자전거-3","시티-4"],
    "at1_menuA2":["","로드자전거-1","접이식-2","클래식-3","키즈자전거-4"],
    "at2_box6A":["","아트-1","아트-2","아트-3","아트-4"],
    "at2_box6_detailA":["","bg3.jpg", "png4.png"],
    "at2_box6_gongA1":[ "",
                       "1. 코로나로 마스크 착용 의무화",
                       "2. 사회적 거리두기 1.5단계 이전",
                       "3. 소독 방역을 했습니다.",
                       "4. 코로나로 마스크 착용 의무화",
                       "5. 코로나로 마스크 착용 의무화"
                     ],
    "at2_box6_gongA2":[ "","1. 2-2","2. 2-2","3. 2-3","4. 2-4","5. 2-5"],
    "at2_box6_gongA3":[ "","1. 3-2","2. 3-2","3. 3-3","4. 3-4","5. 3-5"],
    "at2_box6_gongA4":[ "","1. 4-2","2. 4-2","3. 4-3","4. 4-4","5. 4-5"],
    "at2_box6_gongA5":[ "","1. 5-2","2. 5-2","3. 5-3","4. 5-4","5. 5-5"],
    "at2_box8_menuA":["국산차","서양식차","약차","대추차","오미자차"],
    "at2_box8_imgA0":["jfif10.jfif", "jfif12.jfif", "jfif13.jfif", "jfif14.jfif"],
    "at2_box8_imgA1":["good00.jpg", "good01.jpg", "good02.jpg", "good03.jpg"],
    "at2_box8_imgA2":["good10.jpg", "good11.jpg", "good12.jpg", "good13.jpg"],
    "at2_box8_imgA3":["good20.jpg", "good21.jpg", "good22.jpg", "good23.jpg"],
    "at2_box8_imgA4":["good12.jpg", "good14.jpg", "good02.jpg", "good13.jpg"],
    "at2_box8_img_textA0":["홍차","쌍화차","카푸치노","아메리카노"],
    "at2_box8_img_textA1":["임시-1","임시-2","임시-3","임시-4"],
    "at2_box8_img_textA2":["임시-5","임시-6","임시-7","임시-8"],
    "at2_box8_img_textA3":["임시-9","임시-10","임시-11","임시-12"],
    "at2_box8_img_textA4":["임시-13","임시-14","임시-15","임시-16"],
}
var at5_imgA={
    "img":[ "jfif1.jfif","jfif4.jfif","jfif5.jfif","jfif20.jfif",
            "jfif3.jfif","jfif3.jfif","jfif1.jfif","jfif2.jfif",
           "jfif3.jfif","jfif4.jfif","jfif5.jfif","jfif16.jfif",
           "jfif17.jfif","jfif18.jfif","jfif3.jfif","jfif10.jfif",
           "jfif14.jfif","jfif12.jfif","jfif13.jfif","jfif14.jfif","jfif15.jfif",
           "jfif16.jfif","jfif17.jfif","jfif18.jfif","jfif12.jfif"
          ]
}
window.onload=function()
{
	w = window.innerWidth;
    login=document.querySelector(".login");
	login.addEventListener("click", func_login);
	
	logo_close=document.querySelector(".logo_close");
	logo_close.addEventListener("click", logo_close_func);
	
	$("html, body").animate({"scrollTop":0});
	$(window).scroll(function(){
		pos=$(window).scrollTop();
		if(pos>=100)
			$("nav").css({"position":"fixed", "top":"0"});
		else if(pos<100)
			$("nav").css({"position":"absolute", "top":"100px"});
	});
	for(i=1; i<7; i++)
	{
		this["ju_menu"+i]=document.getElementById("ju_menu"+i);
		this["ju_menu"+i].innerHTML=menuA.ju_menuA[i];
	}
	for(i=1; i<=5; i++)
	{
		this["m_ju_menu"+i]=document.querySelector(".m_ju_menu"+i);
		this["m_ju_menu"+i].innerHTML=menuA.ju_menuA[i];
	}
	$(".top").on("click",function(){
		$("html, body").stop().animate({scrollTop:0},1000);
	})
	
//	메뉴 호출
    $(".logo").on("click",function(){   // 로고 그림 클릭하면
        $("header").show();
        $(".at").css("display","none");
    });
	for(i=1; i<=6; i++) {
		$("#ju_menu"+i).on("click",function(){
			$("header").hide();
			$(".at").css("display","none");
			cnt=$(this).attr("id").substr(7, 1);
			$("#at"+cnt).show();
		});
	}
	for(i=1; i<=5; i++) {
		$(".m_ju_menu"+i).on("click",function(){
			$(".at").css("display","none");
			cnt=$(this).attr("class").substr(9, 1);
			$("#at"+cnt).show();
			$(".m_ju_menu").hide();
		});
	}
	$(".bar").on("mouseover", function(){
		$(".m_ju_menu").show();
	})
    
//    아티클-2의 메뉴-2(다른화면)의 서브-1(상황-1) 
    at2_box5_btn1.addEventListener("click",at2_box5_btn1_func);
    
    at2_box5_btn2.addEventListener("click",at2_box5_btn2_func);
    
    /*아티클-2 속에 [다른화면] 메뉴 속에 (상황-2)서브메뉴 - box6  */
    // 큰 그림 넣기  at2_box6_big
    at2_box6_big.style.background="url(img/png3.PNG)";
    at2_box6_big.style.backgroundSize="100% 100%";
    var str="";
    for(i=1; i<=4; i++)
        str += "<div id='at2_box6_img"+i+"'> </div>";
    at2_box6_img_4.innerHTML = str;
    for(i=1; i<=4; i++)
    {
        this["at2_box6_img"+i].style.background="url(img/img" + i + ".jpg)";
        this["at2_box6_img"+i].style.backgroundSize="100% 100%";
    }
    str="";
    for(i=1; i<=4; i++)
        str += "<div id='at2_box6_img4_text" + i + "'></div>";
    at2_box6_img_4_text.innerHTML = str;
    for(i=1; i<=4; i++)
        this["at2_box6_img4_text"+i].innerHTML=menuA.at2_box6A[i];
    str="";
    for(i=1; i<=2; i++)
        str += "<div id='at2_box6_detail" + i + "'></div>";
    at2_box6_detail.innerHTML = str;
    for(i=1; i<=2; i++)
    {
        this["at2_box6_detail"+i].style.background="url(img/" + menuA.at2_box6_detailA[i] + ")no-repeat center center";
        this["at2_box6_detail"+i].style.backgroundSize="70% 70%";
    }
    str="";
    str += "<ul>";
    for(i=1; i<=5; i++)
    {
        str += "   <li id='at2_box6_gong" + i + "'>" + "</li>";
//      str += "   <li id='at2_box6_gong" + i + "'>" + menuA.at2_box6_gongA1[i] + "</li>"; 
    }     
    str += "</ul>";
    at2_box6_gong.innerHTML = str;
    
    for(i=1; i<=5; i++)
    {
        this["at2_box6_gong"+i].innerHTML=menuA.at2_box6_gongA1[i];
    }
//  공지사항 내용 바꾸기
//    for(i=1; i<=5; i++)
//        this["at2_box6_bnt"+i].addEventListener("click", this["at2_box6_gong"+i+"_func"]);
    
//    아티클-2 box-7 스크롤 되어지는 ul-li 그림 4개 background로 넣기
    for(i=1; i<=10; i++)
    {
        this["at2_box7_img4_"+i].style.background="url(img/img"+i+".jpg)";
        this["at2_box7_img4_"+i].style.backgroundSize="100% 100%";
        
        this["at2_box7_menu"+i].style.background="url(img/img"+i+".jpg)no-repeat center center";
        this["at2_box7_menu"+i].style.backgroundSize="90% 90%";
    }
//    아티클-2 box-8 갤러리
//    for(i=1; i<menuA.at2_box8_menuA.length; i++)
//        this["at2_box8_menu"+i].innerHTML=menuA.at2_box8_menuA[i];
    var a=1;
    for(i in menuA.at2_box8_menuA)
    {
        this["at2_box8_menu"+a].innerHTML=menuA.at2_box8_menuA[i];
        a++;
    }
    for(i in menuA.at2_box8_imgA0)
    {   
        this["at2_box8_img"+i].style.background="url(img/" + menuA.at2_box8_imgA0[i]+")";
        this["at2_box8_img"+i].style.backgroundSize="100% 100%";
        
        this["at2_box8_img_text"+i].innerHTML=menuA.at2_box8_img_textA0[i];
    }  
    
//    5행 5열
    str=""; no=0;
    for(i=1; i<=5; i++)
    {
        for(j=1; j<=5; j++)
        {
            no++;
            str+="<div class='at5_left_img" + no + "'>"+no+"</div>";
        }
    }
//    전체 크기 클래스 .at1_div_box1 변수에 저장
    at5_left=document.querySelector(".at5_left");
    at5_left.innerHTML=str;
    
//    25개 그림 박스의 선택자(.at5_div_box1_img1~25)의 변수 만들기
    for(i=1; i<=25; i++)
        this["at5_left_img"+i]=document.querySelector(".at5_left_img"+i);
//    25개 그림 박스에 배경그림 넣기
    x=1;
    for(i in at5_imgA.img)
    {
        this["at5_left_img"+x].style.background="url(img/"+at5_imgA.img[i]+")";
        this["at5_left_img"+x].style.backgroundSize="100% 100%";
        x++;
    }
    for(i=1; i<=25; i++)
        this["at5_left_img"+i].addEventListener("click",this["func"+i]);
}

function at5_func() { 
    alert("품절 입니다");
}

function func1() {         
    for(i=0; i<10; i++)
    {
        this["at1_right_text"+(i+1)]=document.querySelector("#at1_right_text"+(i+1));
        this["at1_right_text"+(i+1)].innerHTML=at1_text1[i];
    } 
//    오른쪽 큰 그림 나올 변수 만들기   
    at1_right_pic.style.background="url(img/"+at1_imgA.img[0]+")";
    at1_right_pic.style.backgroundSize="100% 100%";
}
function func2() {    
    for(i=0; i<10; i++)
    {
        this["at1_right_text"+(i+1)]=document.querySelector("#at1_right_text"+(i+1));
        this["at1_right_text"+(i+1)].innerHTML=at1_text2[i];
    }  
    //    오른쪽 큰 그림 나올 변수 만들기   
    at1_right_pic.style.background="url(img/"+at1_imgA.img[1]+")";
    at1_right_pic.style.backgroundSize="100% 100%";
}
function func3() {    
    for(i=0; i<10; i++)
    {
        this["at1_right_text"+(i+1)]=document.querySelector("#at1_right_text"+(i+1));
        this["at1_right_text"+(i+1)].innerHTML=at1_text3[i];
    }
    //    오른쪽 큰 그림 나올 변수 만들기   
    at1_right_pic.style.background="url(img/"+at1_imgA.img[2]+")";
    at1_right_pic.style.backgroundSize="100% 100%";
}











//아티클-2의 3번메뉴-8박스 메뉴 클릭으로 그림 4개 바꾸기
function at2_box8_func(js) { 
    switch (js)
    {
        case 0:{
            for(i in menuA.at2_box8_imgA0)
            {
                this["at2_box8_img"+i].style.background="url(img/" + menuA.at2_box8_imgA0[i]+")";
                this["at2_box8_img"+i].style.backgroundSize="100% 100%";
                this["at2_box8_img_text"+i].innerHTML=menuA.at2_box8_img_textA0[i];
                
            }
        }; break;
        case 1:{
            for(i in menuA.at2_box8_imgA1)
            {
                this["at2_box8_img"+i].style.background="url(img/" + menuA.at2_box8_imgA1[i]+")";
                this["at2_box8_img"+i].style.backgroundSize="100% 100%";
                this["at2_box8_img_text"+i].innerHTML=menuA.at2_box8_img_textA1[i];
            }
        }; break;
        case 2:{
            for(i in menuA.at2_box8_imgA2)
            {
                this["at2_box8_img"+i].style.background="url(img/" + menuA.at2_box8_imgA2[i]+")";
                this["at2_box8_img"+i].style.backgroundSize="100% 100%";
                this["at2_box8_img_text"+i].innerHTML=menuA.at2_box8_img_textA2[i];
            }
        }; break;
    }
}




//아티클-2의 3번메뉴-7박스 화살표로 그림 이동하기
function at2_box7_btn_func(js)
{
    if(js==1 && at2_box7_no>=1)
        at2_box7_no--;
    else if(js==2 && at2_box7_no<9)
        at2_box7_no++;
    
    at2_box7_text.innerHTML = (at2_box7_no+1) + " / 10";
    at2_box7_img4.style.left = (-800*at2_box7_no)+"px";
    
}
//  아티클-2의 3번메뉴-7박스 ul-li 그림 클릭으로 그림 이동하기
function at2_box7_func(js)
{
    at2_box7_text.innerHTML = js + " / 10";
    js--;
    at2_box7_no=js;
    
    at2_box7_img4.style.left = (-800*js)+"px";
}

function at2_box6_func(js)
{
    for(i=1; i<=5; i++)
    {
        this["at2_box6_gong"+i]=document.querySelector("#at2_box6_gong"+i);
        switch (js)
        {
            case 1:{
                for(i=1; i<=5; i++)
                    this["at2_box6_gong"+i].innerHTML=menuA.at2_box6_gongA1[i];
            };break;
            case 2:{
                for(i=1; i<=5; i++)
                    this["at2_box6_gong"+i].innerHTML=menuA.at2_box6_gongA2[i];
            };break;
            case 3:{
                for(i=1; i<=5; i++)
                    this["at2_box6_gong"+i].innerHTML=menuA.at2_box6_gongA3[i];
            };break;
            case 4:{
                for(i=1; i<=5; i++)
                    this["at2_box6_gong"+i].innerHTML=menuA.at2_box6_gongA4[i];
            };break;
            case 5:{
                for(i=1; i<=5; i++)
                    this["at2_box6_gong"+i].innerHTML=menuA.at2_box6_gongA5[i];
            };break;
        }  
    }
}


var at2_box5_count=1;
//    아티클-2의 메뉴-2(다른화면)의 서브-1(상황-1) 이전버튼을 클릭했을 때 처리 함수
function at2_box5_btn1_func() {
//    alert("이전 버튼 OK");
    if( at2_box5_count > 1 )
        at2_box5_count--;
    else
        at2_box5_count=5;
    at2_box5_disp.innerHTML = at2_box5_count + " / 5";
    at2_box5_obj(at2_box5_count);
}
function at2_box5_btn2_func() {
//    alert("다음 버튼 OK");
    if( at2_box5_count < 5 )
        at2_box5_count++;
    else
        at2_box5_count=1;
    at2_box5_disp.innerHTML = at2_box5_count + " / 5";
    at2_box5_obj(at2_box5_count);   
}
function at2_box5_obj(at2_box5_count)
{
    for(i=1; i<=5; i++)
        this["at2_box5_case"+i].style.display="none";
    this["at2_box5_case"+at2_box5_count].style.display="block";
}

function gong_close_func() {
    $(".pop_up").hide();
}

function func_login() {
//	logo=document.querySelector(".logo_box");
//	logo.style.display="block";
	$(function(){
		$(".pop_up").hide();
        $("header").show();
		$(".at").hide();
		$(".logo_box").show().css("opacity","0");
		$(".logo_box").animate({"opacity":"1"},1000);
	})
}
function logo_close_func() {
	$(function(){
		$(".logo_box").hide();
	});
}

var width;
var cnt=1;
var timer=setInterval("show()",5000);
function show() {
    if(cnt<4)
        cnt++;
    else
        cnt=1;
    $("#at1_img4").animate({"marginLeft":"-="+width},500,function(){
        $("#at1_img4>div:first").appendTo("#at1_img4");
        $("#at1_img4").css("marginLeft", "+="+width);
    });
    $(".at1_big_no>li").css("background","black");
    $(".at1_big_no>li:eq(" + (cnt-1) + ")").css("background", "red");
}
//제이쿼리의 시작 부분 ==========================================
$(function()
{
    width=$("#at1_big").width();
    $("#at1_img4").hover(function(){
       clearInterval(timer);
    },function(){
        timer=setInterval("show()",5000);
    });
    
    $(".at1_big_no>li:eq(0)").css("background","red"); 
    $(".at1_menu>li:eq(1)").css({"background":"rgba(255,0,0,0.5)","color":"white"});
    
//    아티클-1 메뉴를 클릭했을 때
    $(".at1_menu>li").on("click",function(){
        no=$(this).index()+1;
        $(".at1_menu>li").css({"background":"white","color":"black"});
        $(this).css({"background":"rgba(0,0,0,0.5)","color":"white"});
        if(no==1)
        {
            for(i=1; i<=4; i++)
            {
                $(".at1_menu_img"+i).css("background","url(img/jfif"+(i+9)+".jfif)")
                                    .css("backgroundSize", "100% 100%");
                $(".at1_menu_text"+i).text(menuA.at1_menuA2[i]);
            }
        }
        else
        {
            for(i=1; i<=4; i++)
            {
                $(".at1_menu_img"+i).css("background","url(img/jfif"+(i+13)+".jfif)")
                                    .css("backgroundSize", "100% 100%");
                $(".at1_menu_text"+i).text(menuA.at1_menuA1[i]);
            }
        }
    })
    for(i=1; i<=4; i++)
    {
        $(".at1_menu_img"+i).css("background","url(img/jfif"+(i+20)+".jfif)")
                            .css("backgroundSize", "100% 100%");
        $(".at1_menu_text"+i).text(menuA.at1_menuA1[i]);
    }
    
//    아티클-2 메뉴를 클릭했을 때
    $("#at2_menu>li>ul>li").on("click",function(){
        
        no=$(this).attr("id").substr(7.2);
        $(".at2_box").hide();
        $(".at2_box"+no).fadeIn();
    })
//    아티클-2에서 주메뉴를 클릭했을 때   
    var at2_sw=0;
    $("#at2_menu>li").on("click",function(){                                   $("#at2_menu>li>ul").css("height","0px");
        no=$(this).index()+1;
        if(no==2)
            $("ul",$(this)).css("height","100px");
        else if(no==3)
            $("ul",$(this)).css("height","150px");
        else if(no==4)
            $("ul",$(this)).css("height","50px");
        else 
            $("ul",$(this)).css("height","200px");   
        if(w < 700)
        {
            if(at2_sw==0)
            {
                $("ul",this).show();
                at2_sw=1;
            }
            else 
            {
                $("ul",this).hide();
                at2_sw=0;
            }            
        }
    })
    $(".at2_box2>div").on("click",function(){
        $(".at2_box2_wrap").hide();
        no=$(this).index();
//        alert(no);
        $(".at2_box2>div>ul").css("left","100%"); $(".at2_box2_menu"+no+"_child").animate({"left":"-1490%"},500);
    });
//    at-2안에 박스-2 안에 원 6개 그림 넣기
    for(i=1; i<=6; i++)
    {
        $(".at2_box2_wrap_big"+i).css("background","url(img/jfif"+i+".jfif)")
                                 .css("backgroundSize","100% 100%");
    }
    
//    아티클-2에서 박스-3의 메뉴(4개)를 클릭하면 해당 콘텐츠가 올라오면서 보이기
    $(".at2_box3_menu>li").on("click",function(){
        no=$(this).index()+1;
        $(".at2_box3_menuBox").hide();
        $(".at2_box3_menuBox"+no).fadeIn();        
    })
    $(".at2_box4_menu>li").on("click",function(){
        no=$(this).index()+1;
        $(".at2_box4_menu>li").css({"background":"black","color":"white"});
        $(this).css({"background":"white","color":"black","borderBottom":"none"});
        $(".at2_box4_content").hide();
        $(".at2_box4_content"+no).fadeIn();
    })
//    아티클-4에서 옵션 클릭하면 색상 바뀌고 그림 올라오기
    $(".at3_menu>li").on("click",function(){
        $(".at3_menu>li>p").css("background","#ccc");
        $("p", $(this)).css("background","tomato");
        no=$(this).index();
        pos=-300*no;
        $(".at3_big_img3").animate({"top":pos + "px"},500);
    })
    
    
    
})





























