//alert('Good bey');
document.getElementById("id").innerHTML="Hey";
//document.getElementById("button").addEventListener('click',function(){alert("押したな？");});

document.getElementById("button").addEventListener(
	'click',
	function(){
		$.ajax({
			method: 'GET',
			url:	'/scream',
			success: function(response){
				alert(response);
			}
		});
	}
);

setInterval(function(){
	$.ajax({
		method: 'GET',
		url:	'/now',
		success: function(response){
			$('#id').text(response);
		}
	});
},1000);
