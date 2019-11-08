
$(function(){
  $("#header").load("./header.html",()=>{
   	var href = location.href;
	var pgurl = href.substr(href.lastIndexOf('/') + 1);
	// match all the anchors on the page with the html file name
   if(pgurl!=''){
    	$('a[href="' + pgurl + '"]').addClass('active');
	}
	else{
		$('a[href="index.html"]').addClass('active');
	}
	});
  }); 
$(function(){
  $("#leftFlank").load("./leftFlank.html"); 
});
$(function(){
  $("#rightFlank").load("./rightFlank.html"); 
});
