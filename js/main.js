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
        $.ajax({url: "https://cors-anywhere.herokuapp.com/https://api.vitelity.net/api.php?login=kgetrite&pass=C0l0rad0&cmd=subaccounts&do=list&xml=yes", success: function(result){
			console.log(result)
			var $result= $(result)
			console.log($result)
			var $subaccounts = $result.find("subaccount")
			console.log($subaccounts)
			$subaccounts.each(function(i,subaccount) {
				
				var $li = $('<li>')
				var $subaccount = $(subaccount)
				var subtxt =($subaccount.text())
				$li.text(subtxt)
				
				var $sublist = $('#sublist')
				$sublist.append($li)
				console.log($subaccount.text())
			
			})
        }});
    });
	
//	    $("button").click(function(){
//        $.ajax({url: "https://api.vitelity.net/api.php?login=kgetrite&pass=C0l0rad0&cmd=subaccounts&do=list", success: function(result){
//            $("#div1").html(result);
//        }});
//    });
	
});
