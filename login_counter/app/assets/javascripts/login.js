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
      contentType: 'application/json',
      success: function(response){
	if(response.error_code == -4)
	{
	  $('#messagebox').html('Invalid username and password combination. Please try again.');
	}
	else
	{
	  welcome(response.user_name, response.login_count);
	}
      }
    })
  })
  $('#Signup_button').click(function(){
    $.ajax({
      type: 'POST',
      url: '/signup',
      data: JSON.stringify({
	username: $('#session_username').val(),
	password: $('#session_password').val(),
      }),
      dataType: 'json',
      contentType: 'application/json',
      success: function(response){
	if(response.error_code == -1)
	{
	  $('#messagebox').html('The user name should be 5~20 characters long. Please try again.');
	}
	else if(response.error_code == -2)
	{
	  $('#messagebox').html('The password should be 8~20 characters long. Please try again.');
	}
	else if(response.error_code == -3)
	{
	  $('#messagebox').html('This user name already exists. Please try again.');
	}
	else
	{
	  welcome(response.user_name, response.login_count);
	}
      }
    })
  })
});

function welcome(name, count){
   document.write('Welcome ' + name + '<br>You have logged in ' + count + 'times.<br> <button type="button" onclick="location.reload()">Logout</button>');
}
