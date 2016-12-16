$(document).ready(function(){
	
//	balance
	
    $("#getBal").click(function(event){
		event.preventDefault()
        $.ajax({url: "https://cors-anywhere.herokuapp.com/https://api.vitelity.net/api.php?login=kgetrite&pass=C0l0rad0&cmd=balance&xml=yes",
			success: function(result){
				console.log(result)
				var $result= $(result)
				var $balance = $result.find("response").text();
				var $p = $('#balTtl')
				$p.text('$'+$balance)
				console.log($balance)
        }});
    });

//  subaccount list

	    $("#getAcct").click(function(event){
			event.preventDefault()
        $.ajax({url: "https://cors-anywhere.herokuapp.com/https://api.vitelity.net/api.php?login=kgetrite&pass=C0l0rad0&cmd=subaccounts&do=list&xml=yes", success: function(result){
			var $sublist = $('#sublist')
			$sublist.empty()
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
