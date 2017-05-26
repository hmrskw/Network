function sendMessage(){
	var name = $("#name").val();
	var message = $("#message").val();

	if(!name || !message)return;

	$.ajax({
		url: "/messages",
		method:"POST",
		data: JSON.stringify({name: name,message: message}),
		contentType:"application/json",
		success:function(response){
			console.log(name+":"+message);
		}
	});
}

$("#sendMessage").click(sendMessage);

setInterval(readMessage,1000);

function readMessage(){
	$.ajax({
		url: "/messages",
		method: 'GET',
		success:function(response){
			console.log(response);
		}
	});
}
