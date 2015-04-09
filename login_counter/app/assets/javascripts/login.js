$(document).ready(function(){
  $('#Login_button').click(function(){
    $.ajax({
      type: 'POST',
      url: '/login',
      data: JSON.stringify({
	username: $('#session_username').val(),
	password: $('#session_password').val(),
      }),
      dataType: 'json',
      success: function(response){
	if(response.error_code == '2')
	  $('#messagebox').html('error code is 2');
      }
    });
  });
});
