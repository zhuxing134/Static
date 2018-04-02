var a1,a2,a3,a4;
url = window.location.pathname;  
a1 = url.substring(url.lastIndexOf('/') + 1, url.length-5);
url = window.location.href;
a2 = url.substring(window.location.href, url.length-10);
a3=a1-1;a4=a3+2;
$(document).ready(function(){
    $("#test1").attr("href",a3+".html");
   	$("#test2").attr("href",a4+".html");
})