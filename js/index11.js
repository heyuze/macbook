$(function(){
    $('#dowebok').fullpage({
		scrollingSpeed: 400,
		css3: true,
		resize: true,
		anchors: ["page1","page2","page3","page4","page5"],
		verticalCentered: false,
		//控件初始化完成回調函數
		afterRender: function(){
			$("header").before("<div id='header' style='opacity:0'></div>");
			$("#header").animate({"opacity":"0.6"},400);
			
			$("#img1 img").delay(100).animate({width:'100%',height:'100%',opacity:"1"},2000,'easeOutQuint',function(){					
				});	
			$('#section_p1').animate({
							left:"15%"			
								}, 1900, 'easeOutQuint');
			$("#section_p2").animate({
							left:"15%"
								},1500,"easeOutQuint");
			$("#section_p3").animate({
							left:"15%"
								},1200,"easeOutQuint");	

		//section2选项卡
			 var $div_li = $("div.tab_menu ul li");
				$div_li.click(function(){
					$(this).addClass("selected")            //当前<li>元素高亮
						.siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
						
						
							var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
								$("div.tab_box > div")       //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
									.eq(index).animate({"opacity":"1"},400,'easeInOutQuad')   //显示 <li>元素对应的<div>元素
										.siblings().animate({"opacity":"0"},0); //隐藏其它几个同辈的<div>元素
										
										
											$("div.tab_pic > div")
												.eq(index).animate({"opacity":"1"},400,'easeOutQuad')  
														.siblings().animate({"opacity":"0"},450,'easeInQuad');
			
        	})
			
		},
		//切換動畫完成回調函數
		afterLoad: function(anchorLink,index){
			if(index==1){
				
				$("#img1 img").animate({"opacity":"1"},400,function(){
								});	
				$('#section_p1').animate({	
							left:"15%"				
								}, 1900, 'easeOutQuint');
				$("#section_p2").animate({
							left:"15%"
								},1500,"easeOutQuint");
				$("#section_p3").animate({
							left:"15%"
								},1200,"easeOutQuint");	
			}
			if(index == 3){
				$("#section3_img7").delay(1000).animate({"opacity":"0.8"},1500,function(){
					});			
				var oinner6 = document.getElementById("section3_img6");
				oinner6.style.transitionDelay="0.6s";
				oinner6.style.transitionDuration="1.9s";
				oinner6.style.transform="translateY(115px)";   
				oinner6.style.msTransform="translateY(115px)";   
				oinner6.style.webkitTransform="translateY(115px)";   
				oinner6.style.MozTransform="translateY(115px)";   
				oinner6.style.OTransform="translateY(115px)";
				
				var oinner5 = document.getElementById("section3_img5");
				oinner5.style.transitionDelay="0.6s";
				oinner5.style.transitionDuration="1.7s";
				oinner5.style.transform="translateY(280px)";   
				oinner5.style.msTransform="translateY(280px)";   
				oinner5.style.webkitTransform="translateY(280px)";   
				oinner5.style.MozTransform="translateY(280px)";   
				oinner5.style.OTransform="translateY(280px)"; 
				
				var oinner4 = document.getElementById("section3_img4");
				oinner4.style.transitionDelay="0.6s";
				oinner4.style.transitionDuration="1.5s";
				oinner4.style.transform="translateY(380px)";   
				oinner4.style.msTransform="translateY(380px)";   
				oinner4.style.webkitTransform="translateY(380px)";   
				oinner4.style.MozTransform="translateY(380px)";   
				oinner4.style.OTransform="translateY(380px)"; 
				
				var oinner3 = document.getElementById("section3_img3");
				oinner3.style.transitionDelay="0.6s";
				oinner3.style.transitionDuration="1.6s";
				oinner3.style.transform="translateY(328px)";   
				oinner3.style.msTransform="translateY(328px)";   
				oinner3.style.webkitTransform="translateY(328px)";   
				oinner3.style.MozTransform="translateY(328px)";   
				oinner3.style.OTransform="translateY(328px)"; 
				
				var oinner2 = document.getElementById("section3_img2");
				oinner2.style.transitionDelay="0.6s";
				oinner2.style.transitionDuration="1.2s";
				oinner2.style.transform="translateY(380px)";   
				oinner2.style.msTransform="translateY(380px)";   
				oinner2.style.webkitTransform="translateY(380px)";   
				oinner2.style.MozTransform="translateY(380px)";   
				oinner2.style.OTransform="translateY(380px)"; 
				
				var oinner1 = document.getElementById("section3_img1");
				oinner1.style.transitionDelay="0.6s";
				oinner1.style.transitionDuration="1.2s";
				oinner1.style.transform="translateY(200px)";   
				oinner1.style.msTransform="translateY(200px)";   
				oinner1.style.webkitTransform="translateY(200px)";   
				oinner1.style.MozTransform="translateY(200px)";   
				oinner1.style.OTransform="translateY(200px)"; 			
			}	
			if(index==3&&screen.width == 1366){
				$("#section3_img7").delay(1000).animate({"opacity":"0.8"},1500,function(){
					});			
				var oinner6 = document.getElementById("section3_img6");
				oinner6.style.transitionDelay="0.6s";
				oinner6.style.transitionDuration="1.7s";
				oinner6.style.transform="translateY(85px)";   
				oinner6.style.msTransform="translateY(85px)";   
				oinner6.style.webkitTransform="translateY(85px)";   
				oinner6.style.MozTransform="translateY(85px)";   
				oinner6.style.OTransform="translateY(85px)";
				
				var oinner5 = document.getElementById("section3_img5");
				oinner5.style.transitionDelay="0.6s";
				oinner5.style.transitionDuration="1.7s";
				oinner5.style.transform="translateY(220px)";   
				oinner5.style.msTransform="translateY(220px)";   
				oinner5.style.webkitTransform="translateY(220px)";   
				oinner5.style.MozTransform="translateY(220px)";   
				oinner5.style.OTransform="translateY(220px)"; 
				
				var oinner4 = document.getElementById("section3_img4");
				oinner4.style.transitionDelay="0.6s";
				oinner4.style.transitionDuration="1.3s";
				oinner4.style.transform="translateY(330px)";   
				oinner4.style.msTransform="translateY(330px)";   
				oinner4.style.webkitTransform="translateY(330px)";   
				oinner4.style.MozTransform="translateY(330px)";   
				oinner4.style.OTransform="translateY(330px)"; 
				
				var oinner3 = document.getElementById("section3_img3");
				oinner3.style.transitionDelay="0.6s";
				oinner3.style.transitionDuration="1.5s";
				oinner3.style.transform="translateY(260px)";   
				oinner3.style.msTransform="translateY(260px)";   
				oinner3.style.webkitTransform="translateY(260px)";   
				oinner3.style.MozTransform="translateY(260px)";   
				oinner3.style.OTransform="translateY(260px)"; 
				
				var oinner2 = document.getElementById("section3_img2");
				oinner2.style.transitionDelay="0.6s";
				oinner2.style.transitionDuration="1s";
				oinner2.style.transform="translateY(300px)";   
				oinner2.style.msTransform="translateY(300px)";   
				oinner2.style.webkitTransform="translateY(300px)";   
				oinner2.style.MozTransform="translateY(300px)";   
				oinner2.style.OTransform="translateY(300px)"; 
				
				var oinner1 = document.getElementById("section3_img1");
				oinner1.style.transitionDelay="0.6s";
				oinner1.style.transitionDuration="0.8s";
				oinner1.style.transform="translateY(285px)";   
				oinner1.style.msTransform="translateY(285px)";   
				oinner1.style.webkitTransform="translateY(285px)";   
				oinner1.style.MozTransform="translateY(285px)";   
				oinner1.style.OTransform="translateY(285px)"; 			
			}	
			},
		//離開某個page時候的回調函數
		onLeave:function(index , nextIndex, direction){			
				if(index == '1'){
					$("#img1 img").delay(200).animate({"opacity":"0"},500,function(){					
						});	
					$('#section_p1').delay(200).animate({
						left: '-120%'
							}, 100, 'easeOutExpo');
					$("#section_p2").delay(200).animate({
						left:"-120%"
							},100,"easeOutExpo");	
					$("#section_p3").delay(200).animate({
						left:"-120%"
							},100,"easeOutExpo");	
				}
				}
		});
			
		
		//轮播页
			
			var mySwiper = new Swiper('.swiper-container',{
						pagination: '.swiper-pagination',
						paginationClickable: true,
						nextButton: '.swiper-button-next',
						prevButton: '.swiper-button-prev',
						scrollbar:'.swiper-scrollbar',
						speed:700,
						noSwiping : true,
						onSlideChangeEnd: function(swiper){
							if(swiper.activeIndex==0){
								var index = swiper.activeIndex;
								$("div.swiper-pAll > div")       
									.eq(index).animate({"opacity":"1"},300,'easeInOutQuad')  
										.siblings().animate({"opacity":"0"},300,'easeInOutQuad'); 
							}
							if(swiper.activeIndex==1){
								var index = swiper.activeIndex;
								$("div.swiper-pAll > div")       
									.eq(index).animate({"opacity":"1"},300,'easeInOutQuad')   
										.siblings().animate({"opacity":"0"},300,'easeInOutQuad'); 
							}
							if(swiper.activeIndex==2){
								var index = swiper.activeIndex;
								$("div.swiper-pAll > div")       
									.eq(index).animate({"opacity":"1"},300,'easeInOutQuad') 
										.siblings().animate({"opacity":"0"},300,'easeInOutQuad'); 
							}
							if(swiper.activeIndex==3){
								var index = swiper.activeIndex;
								$("div.swiper-pAll > div")       
									.eq(index).animate({"opacity":"1"},300,'easeInOutQuad')   
										.siblings().animate({"opacity":"0"},300,'easeInOutQuad'); 
							}
							if(swiper.activeIndex==4){
								var index = swiper.activeIndex;
								$("div.swiper-pAll > div")       
									.eq(index).animate({"opacity":"1"},300,'easeInOutQuad')  
										.siblings().animate({"opacity":"0"},300,'easeInOutQuad'); 
							}
							
     						
    					}		
			})
		//section4mousemove
			var x,y
			$('html').mousemove(function (e) {
				x=e.pageX;y=e.pageY
				var x2=(x+49000)/-60,y2=(y+300)/40
				$("#section5_img1").css({"right":x2,"top":y2})
			 });
			 
		if(screen.width == 1366){
			var x,y
			$('html').mousemove(function (e) {
				x=e.pageX;y=e.pageY
				var x2=(x+28000)/-60,y2=(y+300)/40
				$("#section5_img1").css({"right":x2,"top":y2})
			 });
		}
		
		
})
