$(document).ready(function(){
	
//	balance
	
    $("button").click(function(){
        $.ajax({url: "http://api.vitelity.net/api.php?login=kgetrite&pass=C0l0rad0&cmd=balance",
			success: function(result){
            	$("#div1").html(result);
        }});
    });

//  subaccount list

	$("button").click(function(){
        $.ajax({url: "https://api.vitelity.net/api.php?login=kgetrite&pass=C0l0rad0&cmd=subaccounts&do=list",
			success: function(result){
            	$("#div1").html(result);
        }});
    });
	
//	    $("button").click(function(){
//        $.ajax({url: "https://api.vitelity.net/api.php?login=kgetrite&pass=C0l0rad0&cmd=subaccounts&do=list", success: function(result){
//            $("#div1").html(result);
//        }});
//    });
	
});
