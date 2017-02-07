/*$(document).ready(function(){
	$(".top").hide(0).show(500);
});
$(document).ready(function(){
	$(".banner").hide(0).show(1000);
});*/
$(document).ready(function(){
	$("#send").click(function(event){
		event.preventDefault();
		var name =$("#name").val();
		$("#contact-right").hide().show(500).html("Witaj "+name+ "<br>"+" Dziękuje za wiadomość. Odpiszę jak najszybciej."+"<br>"+"  Z poważaniem Bartłomiej");
	});
	/*przejścia przy wczytywaniu strony*/
	$("h2, h3, h4,  button, form, .top ").hide().fadeIn(1000)
	$("h1").hide().show(1000)
	
	
});

