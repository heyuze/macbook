$(function(){
	var oinner6 = document.getElementById("section3_img6");
	var test = document.getElementById("test");
	var transZRegex = /\.*translate3d\((.*,.*,.*)px\)/i;
    test.onmousewheel = function(event) {
    			event = event || window.event;
				if(event.wheelDelta>0){
					console.dir(transZRegex.exec(oinner6.style.transform));
					var scrollY = parseInt(transZRegex.exec(oinner6.style.transform)[1].split(",")[1])-35.6155;
					if(scrollY<-300) return;
				oinner6.style.transitionDelay="0s";
				oinner6.style.transitionDuration="0.5s";
				oinner6.style.transform="translate3d(0,"+scrollY+"px,0)";   
				oinner6.style.msTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner6.style.webkitTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner6.style.MozTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner6.style.OTransform="translate3d(0,"+scrollY+"px,0)";
				/*oinner6.style.transform="rotate(7deg)";
				oinner6.style.msTransform="rotate(7deg)"; 	
				oinner6.style.mozTransform="rotate(7deg)"; 	
				oinner6.style.webkitTransform="rotate(7deg)"; 
				oinner6.style.oTransform="rotate(7deg)";*/
				}else{
				var scrollY = parseInt(transZRegex.exec(oinner6.style.transform)[1].split(",")[1])+35.4654;
				if(scrollY>300) return;
				oinner6.style.transitionDelay="0s";
				oinner6.style.transitionDuration="0.5s";
				oinner6.style.transform="translate3d(0,"+scrollY+"px,0)";   
				oinner6.style.msTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner6.style.webkitTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner6.style.MozTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner6.style.OTransform="translate3d(0,"+scrollY+"px,0)";
				oinner6.style.OTransform="translate3d(0,"+scrollY+"px,0)";
				/*oinner6.style.transform="rotate(7deg)";
				oinner6.style.msTransform="rotate(7deg)"; 	
				oinner6.style.mozTransform="rotate(7deg)"; 	
				oinner6.style.webkitTransform="rotate(7deg)"; 
				oinner6.style.oTransform="rotate(7deg)";*/
				}				
			};
	/* 	var oinner7 = document.getElementById("section3_img7");
	var test2 = document.getElementById("test2");
	var transZRegex2 = /\.*translate3d\((.*,.*,.*)px\)/i;
    test.onmousewheel = function(event) {
    			event = event || window.event;
				if(event.wheelDelta>0){
					console.dir(transZRegex2.exec(oinner7.style.transform));
					var scrollY = parseInt(transZRegex2.exec(oinner7.style.transform)[1].split(",")[1])-15.6155;
					if(scrollY<-300) return;
				oinner7.style.transitionDelay="0s";
				oinner7.style.transitionDuration="0.7s";
				oinner7.style.transform="translate3d(0,"+scrollY+"px,0)";   
				oinner7.style.msTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner7.style.webkitTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner7.style.MozTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner7.style.OTransform="translate3d(0,"+scrollY+"px,0)";
			
				}else{
				var scrollY = parseInt(transZRegex2.exec(oinner7.style.transform)[1].split(",")[1])+15.4654;
				if(scrollY>300) return;
				oinner7.style.transitionDelay="0s";
				oinner7.style.transitionDuration="0.7s";
				oinner7.style.transform="translate3d(0,"+scrollY+"px,0)";   
				oinner7.style.msTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner7.style.webkitTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner7.style.MozTransform="translate3d(0,"+scrollY+"px,0)";   
				oinner7.style.OTransform="translate3d(0,"+scrollY+"px,0)";
				oinner7.style.OTransform="translate3d(0,"+scrollY+"px,0)";
				}
	}; */
})
