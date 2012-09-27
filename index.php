<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>KRWelch.com</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js" type="text/javascript"></script>
	<script>
		!window.jQuery && document.write('<script src="jquery.min.js"><\/script>');
	</script>
<script src="jquery.timers-1.1.2.js" type="text/javascript"></script>
<script type="text/javascript">
$(function(){
	   $("a").append("<span></span>").find('span').append("<span></span>");
   $('a span').hover(function(){
		$(this).find('span').animate({left:'0px'},{queue:false,duration:500});
		}, function(){
		$(this).find('span').animate({left:'-105%'},{
									 queue:false,
									 duration:500
		});
	});
   $("#logo").everyTime ( 10, function (){
$("#logo") .fadeTo (3000, .3 ).fadeTo(1000, 1);
										});
	$(".main").css('top','50%').css('margin-top','-'+($(".main").height()/2)+'px');		   
});
</script>
<style>
body{background:black; color:#999; font:small-caps 14px Arial, Helvetica, sans-serif;}
.main{width:300px; text-align:center; position:absolute; left:50%; margin-left:-150px;}
#logo{margin-bottom:25px;}
a{color:#333;text-decoration:none;position:relative; overflow:hidden;}
 a span{
	position:absolute;
	display:block;
	left:0px;
	bottom:0px;
	height:100%;
	width:100%;
	margin:0;
	padding:0;
	float:none;
	overflow:hidden;
}
a span span{
	height:1px;
	left:-105%;
	background:white;	
}
</style>
<link rel="shortcut icon" href="/images/fav.ico">
</head>
<body>
<? include 'google.php';?>
<div class="main">
<img src="/images/kw_logo.png" width="300" height="321" id="logo" />
website by <a href="mailto:kyle@krwelch.com">kyle welch</a>
</div>
</div>
</body>
</html>